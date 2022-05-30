import React from 'react'
import "./sidebar.css"
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { menuItems } from './menuItem'; 

export default function Sidebar () {
  return (
    <div className='sidebar'> 
      <StickyBox offsetTop={10} offsetBottom={10}>
        <div className='ham'>
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id='toggle'/>
          <div className='menu'>
            {menuItems.map((i) => (
              <div className='icons'>
                <Link to={i.link}>
                  <i.icon/><span>{i.name}</span>
                </Link>
              </div>
            ))}  
          </div>
        </div>
        <div className='iconContainer'>
          {menuItems.map((i) => (
            <div className='icon'>
              <Link to={i.link}>
                <i.icon/><span>{i.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </StickyBox>
    </div> 
  )
}