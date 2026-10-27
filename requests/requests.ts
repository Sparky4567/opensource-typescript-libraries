async function requests(url:string,options:object) {
  try {
    return await fetch(url).then((data)=>{
      return data
    }).catch((err)=>{
      return err
    })
  }
  catch (error) {
      return error
  }
}

export default requests
