import requests from "./requests/requests.ts"

let res = await requests("https://artefaktas.eu/feed.json",{
  type:"GET",
  headers:{
    "User-Agent":"artefaktasbot"
  }
})

if(res.status==200){
  console.log(await res.json())
}

else{
  console.log(`Satus code: ${res.status}`)
}
