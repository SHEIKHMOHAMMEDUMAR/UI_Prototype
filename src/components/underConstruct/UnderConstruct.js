import "./underConstruct.css"
import { Link } from "react-router-dom";
import { Handyman } from "@mui/icons-material"

export default function UnderConstruct () {
  return (
    <div className="underConstruct">
      <div className="wrapperu">
        <Handyman style={{ fontSize: "150px" }}/>
        <div className="warning">
          Website is Under Construction
        </div>
        <div className="warningD">
          We're making lots of improvements and will be back soon.
        </div>
        <div>
          Untill then enjoy our other servies. 
        </div>
        <div>
          <Link to="/dashboard" style={{ fontWeight: "bold" }}>Go back, </Link> or head over to <Link to="/" style={{ fontWeight: "bold" }} >Perfios.com</Link> to choose  new direction.
        </div>
      </div>        
    </div>
  )
}
