import { React } from 'react';
import "./entites.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Entites ()  {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="entites">
            This page is under construction please visit after sometime.
          </div>
        </div>
      </div>
    </>        
  )
}