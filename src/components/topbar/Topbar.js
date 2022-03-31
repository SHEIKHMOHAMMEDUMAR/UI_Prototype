import React from 'react'
import "./topbar.css"
import img1 from "./perfios.png"
export default function Topbar() {
  return (
    <div className="topbar">
        <img src={img1} alt="logo" className='image1'/>
        <a href='-' className='userName'>Jatin</a>
    </div>
  )
}