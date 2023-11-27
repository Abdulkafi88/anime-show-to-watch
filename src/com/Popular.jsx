import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
export const Popular = () => {
  const styleImgg = {
    width: "400px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "10px",
    backgroundColor: "#ededed",
  }
  const [displayPopularAnime, setdisplayPopularAnime] = useState([])
  useEffect(() => {
    const displayAnime = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/top/anime?filter=bypopularity`
      )
      const data = await res.json()
      console.log(data)
      if (data.data) {
        setdisplayPopularAnime(data.data)
      }
    }
    displayAnime()
  }, [])
  return (
    <>
      <div className="characters">
        {displayPopularAnime.map((anime, index) => (
          <div key={index} className="character">
            <Link to={`/Details/${anime.mal_id}`}>
              <img
                style={styleImgg} 
                src={anime.images.jpg.image_url}
                alt={anime.title}
              />
            </Link>
          </div>
        ))} 

        

      
      </div>
    </>
  )
}
export default Popular




