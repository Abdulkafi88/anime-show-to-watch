import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
export const Details = () => {
  const [displayAnimeDetails, setdisplayAnimeDetails] = useState(null)
  const { mal_id } = useParams()
  const Nav = useNavigate()
  const styleImg = {
    width: "400px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "10px",
    backgroundColor: "#ededed",
  }
  const goback = () => {
    return Nav("/Popular")
  }
  useEffect(() => {
    const fetchAnimeDetails = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
      const data = await res.json()
      setdisplayAnimeDetails(data.data)
    }
    fetchAnimeDetails()
  }, [])
  return (
    <>
      {displayAnimeDetails && (
        <div className="details">
          <div>
            <img
              style={styleImg}
              src={displayAnimeDetails.images.jpg.image_url}
              alt=""
            />
            <button onClick={goback}>go back</button>
          </div>
          <div>
            <h2>Tittle: {displayAnimeDetails.title_english}</h2>
            <p>des : {displayAnimeDetails.synopsis }</p>
            <h2>score : {displayAnimeDetails.score}</h2>
          </div>
        </div>
      )}
    </>
  )
}

export default Details
