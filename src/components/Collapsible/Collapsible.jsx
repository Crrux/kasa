import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapsible({ titre, text, string }) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="collapsible">
      <div className="collapsible-divbutton">
        <p>{titre}</p>
        <button
          type="button"
          className={`collapsible-button ${isActive ? 'active' : ''}`}
          onClick={handleClick}
        >
          {isActive ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </button>
      </div>

      <div className={`collapsible-content ${isActive ? 'active' : ''}`}>
        {text ? (
          <>
            {text.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </>
        ) : (
          ''
        )}
        {string ? (
          <>
            <p>{string}</p>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

Collapsible.propTypes = {
  titre: PropTypes.string,
  string: PropTypes.string,
  text: PropTypes.array,
}

export default Collapsible
