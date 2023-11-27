import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
export const UpcomingDetails = () => {
  const styleImg = {
    width: "400px",
    height: "500px",
    objectFit: "cover",
    borderRadius: "10px",
    backgroundColor: "#ededed",
  }
  const nav = useNavigate()
  const { mal_id } = useParams()
  const goback = () => {
    return nav("/Upcoming")
  }
  const [displayAiringAnime, setdisplayAiringAnime] = useState()
  useEffect(() => {
    const fetchAiringDetails = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
      const data = await res.json()
      setdisplayAiringAnime(data.data)
    }
    fetchAiringDetails()
  }, [])

  return (
    <>
      {displayAiringAnime && (
        <div className="details">
          <div>
            <img
              style={styleImg}
              src={displayAiringAnime.images.jpg.image_url}
              alt=""
            />
            <button onClick={goback}>go back</button>
          </div>
          <div>
            <h2>Tittle: {displayAiringAnime.title_english}</h2>
            <p>des : {displayAiringAnime.synopsis}</p>
            <h2>score : {displayAiringAnime.score}</h2>
          </div>
        </div>
      )}
    </>
  )
}
export default UpcomingDetails
