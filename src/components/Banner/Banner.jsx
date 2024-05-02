import PropTypes from 'prop-types'

function Banner({ img, text }) {
  return (
    <section className="Banner" style={{ backgroundImage: `url(${img})` }}>
      {text && <h1>{text}</h1>}
    </section>
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Banner
