import { React } from 'react';
import "./entites.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import UnderConstruct from '../../components/underConstruct/UnderConstruct';

export default function Entites ()  {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="entites">
            <UnderConstruct />
          </div>
        </div>
      </div>
    </>        
  )
}