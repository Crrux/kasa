function Caroussel(images) {
  return (
    <section className="Carroussel">
      <div>
        {images.images ? (
          images.images.map((image) => <img key={image} src={image} />)
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </section>
  )
}

export default Caroussel
