import { React } from 'react';
import "./settings.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import UnderConstruct from '../../components/underConstruct/UnderConstruct';

export default function Settings ()  {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="settings">
            <UnderConstruct/>
          </div>
        </div>
      </div>
    </>        
  )
}