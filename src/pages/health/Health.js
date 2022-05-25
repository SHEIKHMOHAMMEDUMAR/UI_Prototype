import { React } from 'react';
import "./health.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Health ()  {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="health">
            This page is under construction please visit after sometime.
          </div>
        </div>
      </div>
    </>        
  )
}