// import React from 'react'
// import {Link} from 'react-router-dom'
// export const Dropdown = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to={"/Login"}>Login</Link>
//         </li>
//         <li>option2</li>
//       </ul>
//     </nav>
//   )
// }

import React, { useState } from "react"

export const Dropdown = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleDropdownButton = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <main className="split-button">
      <button>Dashboard</button>
      <button onClick={toggleDropdownButton}>
        <span className="chevron material-symbols-sharp">
          {isMenuOpen ? "close" : "expand_more"}
        </span>
      </button>
    </main>
  )
}

export default Dropdown
