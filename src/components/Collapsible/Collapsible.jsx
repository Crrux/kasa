import { useState } from 'react'

function Collapsible() {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="collapsible">
      <div className="collapsible-divbutton">
        <p>test</p>
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
        <p>Lorem ipsum...</p>
      </div>
    </div>
  )
}

export default Collapsible
