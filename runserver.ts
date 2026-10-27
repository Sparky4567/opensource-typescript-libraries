import getenv from "./envreader/getenv.ts"
import server from "./server/server.ts"
import index from "./server/index.html"

server(3000,{"/":index})
