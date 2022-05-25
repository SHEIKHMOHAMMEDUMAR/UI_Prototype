import { React } from 'react';
import "./settings.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings ()  {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="settings">
            This page is under construction please visit after sometime.
          </div>
        </div>
      </div>
    </>        
  )
}