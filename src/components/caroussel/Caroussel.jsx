function Caroussel(images) {
  return (
    <div className="Carroussel">
      <div>
        {images.images ? (
          images.images.map((image) => <img key={image} src={image} />)
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  )
}

export default Caroussel
