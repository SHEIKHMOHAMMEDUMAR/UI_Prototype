import "./practice.css"
import { Link } from "react-router-dom";
import { Biotech } from "@mui/icons-material"

export default function Practice () {
  return (
    <div className="practice">
      <div className="wrapperp">
        <Biotech style={{ fontSize: "150px" }}/>
        <div className="errorp">
          Testing
        </div>
        <div className="errorDp">
          Task Completed
        </div>
        <div>
          This page help to undersatnd the dynamic nature of menubar / navbar.
        </div>
        <div>
          <Link to="/dashboard" style={{ fontWeight: "bold" }}>Go back, </Link> or head over to <Link to="/" style={{ fontWeight: "bold" }} >Perfios.com</Link> to choose  new direction.
        </div>
      </div>        
    </div>
  )
}
