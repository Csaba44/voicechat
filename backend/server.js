const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow frontend
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.get("/", (req, res) => res.send("Voice Chat Server Running"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("voice", (data) => {
    socket.broadcast.emit("voice", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
