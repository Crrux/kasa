import PropTypes from 'prop-types'

function Banner({ img, text, filter }) {
  return (
    <section
      className="Banner"
      style={{
        backgroundImage: `url(${img})`,
        filter: filter ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' : '',
      }}
    >
      {text && <h1>{text}</h1>}
    </section>
  )
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
  filter: PropTypes.bool,
}

export default Banner
