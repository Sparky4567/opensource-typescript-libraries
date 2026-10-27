import getenv from "./envreader/getenv.ts"

const res = await getenv("./settings/settings.env")
console.log(`Version name ${res.NAME}`)
console.log(`Version number: ${res.VERSION}`)
