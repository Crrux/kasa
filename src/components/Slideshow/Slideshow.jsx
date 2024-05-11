import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Slideshow({ data }) {
  const [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    showSlides(slideIndex)
  }, [slideIndex])

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n)
  }

  const showSlides = (n) => {
    let i
    const slides = document.getElementsByClassName('myPictures')

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
    slides[n - 1].style.display = 'block'
  }
  return (
    <section className="slideshow-container">
      <div className="mySlides">
        {data ? (
          <>
            {data.map((pictures) => (
              <div key={pictures} className="myPictures fade">
                <div className="myPictures--imgcontainer">
                  <img src={pictures} />
                </div>

                <p className="myPictures--indexation">
                  {slideIndex}/{data.length}
                </p>
              </div>
            ))}
          </>
        ) : (
          ''
        )}
      </div>

      {data.length > 1 ? (
        <button className="prev" onClick={() => plusSlides(-1)} type="button">
          &#10094;
        </button>
      ) : (
        ''
      )}
      {data.length > 1 ? (
        <button className="next" onClick={() => plusSlides(1)} type="button">
          &#10095;
        </button>
      ) : (
        ''
      )}
    </section>
  )
}

Slideshow.propTypes = {
  data: PropTypes.array,
}

export default Slideshow
