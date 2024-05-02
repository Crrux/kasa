import { useState } from 'react'

function Collapsible() {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="collapsible">
      <button
        type="button"
        className={`collapsible-button ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        Open Collapsible
      </button>
      <div className={`collapsible-content ${isActive ? 'active' : ''}`}>
        <p>Lorem ipsum...</p>
      </div>
    </div>
  )
}

export default Collapsible

// var content = this.nextElementSibling;
// if (content.style.maxHeight) {
//     content.style.maxHeight = null;
// } else {
//     content.style.maxHeight = content.scrollHeight + "px";
// }
// });
