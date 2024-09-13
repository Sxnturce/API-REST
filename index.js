import express from "express"
const server = express();
import router from "./routes/route.js";

server.use(express.json());
server.disable('X-Powered-By')

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`El servidor esta corriendo -> http://localhost:${port} 🚀`);
})


server.use("/api/users/", router)