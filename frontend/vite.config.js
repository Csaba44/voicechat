import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  server: {
    https: true, 
    host: "192.168.33.139",  
  },
  plugins: [react(), mkcert()],
});
