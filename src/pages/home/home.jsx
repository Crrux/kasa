function Home() {
  async function fetchjson() {
    const response = await fetch('../src/database.json')
    const logements = await response.json()
    console.log(logements[0].title)
    return logements
  }
  fetchjson()
  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export default Home
