import { Dashboard, LabelImportant, Settings, Speed, Widgets } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";

export default function Sidebar () {
  return (
    <div className='sidebar'> 
      <StickyBox offsetTop={10} offsetBottom={10}>
        <div className='ham'>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id='toggle'/>
        <div className='menu'>
          <Link to="/dashboard">
            <div className='icons'>
              <Dashboard/><span>Dashboard</span>
            </div>
          </Link>
          <div className='icons'>
            <Link to="/transactions">
              <LabelImportant/><span>Transactions</span>
            </Link>
          </div>
          <div className='icons'>
            <Link to="/entites">
              <Widgets/><span>Entites</span>
            </Link>
          </div>
          <div className='icons'>
            <Link to="/health">
              <Speed/><span>Health</span>
            </Link>
          </div>
          <div className='icons'>
            <Link to="/settings">
              <Settings/><span>Settings</span>
            </Link>
          </div>
        </div>
        </div>
        <div className='iconContainer'>
          <div className='icon'>
            <Link to="/dashboard">
              <Dashboard/><span>Dashboard</span>
            </Link>
          </div>
          <div className='icon'>
            <Link to="/transactions">
              <LabelImportant/><span>Transactions</span>
            </Link>
          </div>
          <div className='icon'>
            <Link to="/entites">
              <Widgets/><span>Entites</span>
            </Link>
          </div>
          <div className='icon'>
            <Link to="/health">
              <Speed/><span>Health</span>
            </Link>
          </div>
          <div className='icon'>
            <Link to="/settings">
              <Settings/><span>Settings</span>
            </Link>
          </div>
        </div>
      </StickyBox>
    </div> 
  )
}