import { Dashboard, LabelImportant, Settings, Speed, Widgets } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"
import StickyBox from "react-sticky-box";

export default function Sidebar() {
  return (
    <div className='sidebar'> 
      <StickyBox offsetTop={10} offsetBottom={10}>
      <div className='ham'>
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id='toggle'/>
      <div className='menu'>
      <div className='icons-select'><Dashboard/><span>Dashboard</span></div>
          <div className='icons'><LabelImportant/><span>Transactions</span></div>
          <div className='icons'><Widgets/><span>Entites</span></div>
          <div className='icons'><Speed/><span>Health</span></div>
          <div className='icons'><Settings/><span>Settings</span></div>
          </div>
    </div>
        <div className='iconContainer'>
          <div className='icon Active'><Dashboard/><span>Dashboard</span></div>
          <div className='icon'><LabelImportant/><span>Transactions</span></div>
          <div className='icon'><Widgets/><span>Entites</span></div>
          <div className='icon'><Speed/><span>Health</span></div>
          <div className='icon'><Settings/><span>Settings</span></div>
        </div>
        </StickyBox>
    </div>
    
  )
}