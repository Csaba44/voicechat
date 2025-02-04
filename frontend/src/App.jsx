import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://192.168.33.139:5000"); // Replace with your local network IP

function App() {
  const audioContextRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [connected, setConnected] = useState(false);

  const startAudio = async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    setStream(stream);

    const audioContext = audioContextRef.current;
    const audioSource = audioContext.createMediaStreamSource(stream);
    const processor = audioContext.createScriptProcessor(1024, 1, 1);

    audioSource.connect(processor);
    processor.connect(audioContext.destination);

    processor.onaudioprocess = (event) => {
      const audioData = event.inputBuffer.getChannelData(0);
    
      // Check if audio data is actually present
      const hasSound = audioData.some((sample) => sample !== 0);
      if (!hasSound) return;
    
      // Ensure the audioData is a Float32Array
      if (audioData instanceof Float32Array && audioData.length > 0) {
        console.log("Sending audio data:", audioData.length, audioData);
        socket.emit("voice", audioData);
      }
    };
    

    socket.on("voice", (data) => {
      if (!data || data.length === 0) return; // Prevents empty data errors
    
      const audioContext = audioContextRef.current;
      
      // Ensure the data is a Float32Array and has valid length
      if (data instanceof Float32Array && data.length > 0) {
        console.log("Received audio data:", data.length, data);

        // Simulate playback without actually playing the sound
        console.log("Audio buffer created and ready to play");

        // Optional: Create the buffer but don't play it
        const buffer = audioContext.createBuffer(1, data.length, audioContext.sampleRate);
        buffer.copyToChannel(data, 0);

        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
      }
    });
    

    setConnected(true);
  };

  return (
    <div>
      <h1>Voice Chat Demo</h1>
      {!connected ? (
        <button onClick={startAudio}>Start Voice Chat</button>
      ) : (
        <p>Connected! Open in another tab to test.</p>
      )}
    </div>
  );
}

export default App;