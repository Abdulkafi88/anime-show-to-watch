import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Header } from "./com/Header"
import { Popular } from "./com/Popular"
import { Airing } from "./com/Airing"
import { Upcoming } from "./com/Upcoming"
import { Details } from "./com/Details"
import { AiringDetails } from "./com/AiringDetails"
import { UpcomingDetails } from "./com/UpcomingDetails"
import { Login } from "./com/Login"
import { SignUpFrom } from "./com/SignUpFrom"
import "./App.css"
import { auth } from "./Firebase"
function App() {
 const [userEmail, setUserEmail] = useState("")

 useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((user) => {
     if (user && user.email) {
       setUserEmail(user.email)
     } else {
       setUserEmail("") // No user is signed in
     }
   })

   return () => unsubscribe()
 }, [])

  return (
    <>
      <Header auth={auth} userEmail={userEmail} setUserEmail={setUserEmail} />
      <Routes>
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Airing" element={<Airing />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/SignUpFrom"
          element={<SignUpFrom setUserEmail={setUserEmail} />}
        />
        <Route path="/Details/:mal_id" element={<Details />} />
        <Route path="/AiringDetails/:mal_id" element={<AiringDetails />} />
        <Route path="/UpcomingDetails/:mal_id" element={<UpcomingDetails />} />
      </Routes>
    </>
  )
}

export default App
