import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const styleImgg = {
  width: "400px",
  height: "500px",
  objectFit: "cover",
  borderRadius: "10px",
  backgroundColor: "#ededed",
}
export const Airing = () => {
  const [airingAnime, setAiringAnime] = useState([])
  useEffect(() => {
    const displayAiringAnime = async () => {
      const res = await fetch(
        "https://api.jikan.moe/v4/top/anime?filter=airing"
      )
      const data = await res.json()
      if (data.data) {
        setAiringAnime(data.data)
      }
    }
    displayAiringAnime()
  }, [])
  return (
    <div className="characters">
      {airingAnime.map((anime, index) => (
        <div key={index} className="character">
          <Link to={`/AiringDetails/${anime.mal_id}`}>
            <img
              style={styleImgg}
              src={anime.images.jpg.image_url}
              alt={anime.title}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Airing
