import React from "react"
import { Link  } from "react-router-dom"
import { useState, useEffect } from "react"
import { Dropdown } from "./Dropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { signOut } from "firebase/auth"

export const Header = ({ userEmail, setUserEmail ,auth}) => {
  const i = {
    margin: "0 10px",
    color: "#ff0000",
  }
  const [searchText, setSearchText] = useState("")
  const [userSearch, setUserSearch] = useState([])
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [logout,setLout] = useState(true)
  const handleSplitButtonClicked = () => {
    alert("Split Button Clicked!!!11")
  }

  const handleMenuLabelButtonClicked = () => {
    toggleDropdownButton()
  }

  const toggleDropdownButton = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const searchFeatch = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/search/anime?q=${searchText}`
      )
      const searchData = await res.json()
      console.log(searchData)
    }
    searchFeatch()
  })
const handleLogout = async () => {
  try {
    await signOut(auth)
    setUserEmail("") 
    setLout(false)
  } catch (error) {
    console.error("Error signing out:", error)
  }
}
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Popular">
              Popular <i style={i} className="fa-solid  fa-fire"></i>{" "}
            </Link>
          </li>
          <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
              <div className="input-control">
                <input
                  type="text"
                  placeholder="Search Anime"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
          <li>
            <Link to="/Airing">Airing</Link>
          </li>
          <li>
            <Link to="/Upcoming">Upcoming</Link>
          </li>
          {/* <li onClick={handleLogin}>
            <Link >login</Link>
          </li> */}
          {/* {login &&(<Dropdown/>)} */}
          <main className="split-button">
            <button onClick={handleSplitButtonClicked}>Dashboard</button>
            <button onClick={toggleDropdownButton}>
              <span className="chevron material-symbols-sharp">
                {isMenuOpen ? "x" : "↓"}
              </span>
            </button>
            <section
              id="main-menu"
              className={`main-menu ${isMenuOpen ? "open" : ""}`}
            >
              {userEmail ? (
                <button onClick={handleMenuLabelButtonClicked}>
                  <span className="material-symbols-sharp">
                    <p>{userEmail}</p>
                  </span>
                </button>
              ) : (
                <>
                  <button onClick={handleMenuLabelButtonClicked}>
                    <Link to={"/Login"} className="material-symbols-sharp">
                      Login
                    </Link>
                  </button>
                  <button onClick={handleMenuLabelButtonClicked}>
                    <Link to={"/SignUpFrom"} className="material-symbols-sharp">
                      Sign Up
                    </Link>
                  </button>
                </>
              )}

              {/* Render logout button if the user is logged in */}
              {userEmail && (
                <button
                  className="material-symbols-sharp"
                  onClick={handleLogout}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "5px solid #e5e7eb",
                  }}
                >
                  Logout
                </button>
              )}
            </section>
          </main>
        </ul>
      </nav>
    </>
  )
}
export default Header
