import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapsible({ titre, text, string }) {
  const [isActive, setIsActive] = useState(false)
  const [isFirstClick, setIsFirstClick] = useState(true)
  const handleClick = () => {
    setIsActive(!isActive)
    if (isFirstClick) {
      setIsFirstClick(false)
    }
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
          <i
            id="icon"
            className={`fa-solid fa-chevron-up ${
              !isFirstClick
                ? isActive
                  ? 'icon-down-rotated'
                  : 'icon-up-rotated'
                : ''
            }`}
          ></i>
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
