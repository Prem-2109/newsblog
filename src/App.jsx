import React, { useState } from "react"
//import Navbar from "./components/navbar";
import Nav from './components/nav'
import Newsboard from "./components/newsboard";

function App() {
  const [category, setcategory]=useState([])

  return (
    <>
    <Nav setcategory={setcategory}/>
    <Newsboard category={category}/>
    </>
  )
}

export default App
