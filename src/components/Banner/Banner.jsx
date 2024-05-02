function Banner({ img, text }) {
  return (
    <main className="main">
      <section className="main__titre">
        <img src={img} />
        {text && <h1>{text}</h1>}
      </section>
    </main>
  )
}

export default Banner

Banner.PropTypes = {
  img: String,
  text: String,
}
