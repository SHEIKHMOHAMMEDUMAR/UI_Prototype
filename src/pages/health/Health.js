import { React } from 'react';
import "./health.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import UnderConstruct from '../../components/underConstruct/UnderConstruct';

export default function Health ()  {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="health">
            <UnderConstruct />
          </div>
        </div>
      </div>
    </>        
  )
}