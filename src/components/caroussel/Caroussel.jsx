import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Carousel({ data }) {
  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    showSlides(slideIndex)
  }, [slideIndex])

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n)
  }

  const showSlides = (n) => {
    let i
    const slides = document.getElementsByClassName('mySlides')

    if (n > slides.length) {
      setSlideIndex(1)
      return
    }
    if (n < 1) {
      setSlideIndex(slides.length)
      return
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slides[n - 1].style.display = 'flex'
  }

  return (
    <section>
      <div className="slideshow-container">
        {data ? (
          <>
            {data.map((pictures) => (
              <div key={pictures} className="mySlides fade">
                <img src={pictures} />
              </div>
            ))}
          </>
        ) : (
          ''
        )}

        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>
      </div>
    </section>
  )
}

Carousel.propTypes = {
  data: PropTypes.array,
}

export default Carousel
