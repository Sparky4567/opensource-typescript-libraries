

async function server(passedPort:number,passedRoutes:object){
  try {
    Bun.serve({
      port:passedPort,
      routes:passedRoutes,
    })
    console.log(`Running on http://127.0.0.1:${passedPort}`)
  } catch (error) {
    console.log(error)
  }
}

export default server
