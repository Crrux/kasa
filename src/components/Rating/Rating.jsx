import PropTypes from 'prop-types'
function Rating({ stars }) {
  return (
    <div className="star-rating">
      {stars ? (
        <>
          {' '}
          {Array(stars)
            .fill(null)
            .map((_, index) => (
              <i key={index} className="fa-solid fa-star"></i>
            ))}
          {Array(5 - stars)
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
