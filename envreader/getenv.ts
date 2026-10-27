async function getenv(passedPath:string){
  try {
      const path = passedPath;
      const file = Bun.file(path);
      const text = await file.text();
      return await JSON.parse(text)
  } catch (error) {
      return `Error: ${error}`
  }
}

export default getenv
