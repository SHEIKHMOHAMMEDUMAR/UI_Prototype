import { Dashboard, LabelImportant, Settings, Speed, Widgets } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="icon top"><Dashboard/><span>Dashboard</span></div>
        <div className='icon'><LabelImportant/><span>Transactions</span></div>
        <div className='icon'><Widgets/><span>Entites</span></div>
        <div className='icon'><Speed/><span>Health</span></div>
        <div className="icon bot"><Settings/><span>Settings</span></div>
    </div>
  )
}