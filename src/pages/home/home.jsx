function Home() {
  async function fetchjson() {
    const response = await fetch('../src/database.json')
    const logements = await response.json()
    console.log(logements[0].title)
    return logements
  }
  fetchjson()
  return (
    <main>
      <h1>home</h1>
      <div id="cards"></div>
    </main>
  )
}

export default Home
