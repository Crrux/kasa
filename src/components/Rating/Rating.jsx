import PropTypes from 'prop-types'
function Rating({ stars }) {
  const filledStars = Math.floor(stars)
  const emptyStars = Math.max(5 - stars, 0)
  return (
    <div className="star-rating">
      {stars ? (
        <>
          {' '}
          {Array(filledStars)
            .fill(null)
            .map((_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}
          {Array(emptyStars)
            .fill(null)
            .map((_, index) => (
              <i key={index} className="fa-regular fa-star"></i>
            ))}
        </>
      ) : (
        <div></div>
      )}
    </div>
  )
}

Rating.propTypes = {
  stars: PropTypes.number,
}

export default Rating
