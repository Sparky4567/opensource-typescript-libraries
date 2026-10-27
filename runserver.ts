import getenv from "./envreader/getenv.ts";
import server from "./server/server.ts";
import index from "./server/index.html";
import { readdir } from "node:fs/promises";

// Read all files in the server directory
const files = await readdir("./server");

const obj: Record<string, unknown> = {
  "/": index,
};

for (const file of files) {
  if (file === "index.html") continue;
  if(file !== "server.ts"){
  const filePath = `./server/${file}`;
  const route = `/${file.replace(/\.html$/, "")}`;

  const module = await import(filePath);

  obj[route] = module.default ?? module;
  }
}
console.log(obj)
server(3000, obj);
