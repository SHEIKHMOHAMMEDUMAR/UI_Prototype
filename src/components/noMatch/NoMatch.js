import "./noMatch.css"
import { Link } from "react-router-dom";
import { SentimentVeryDissatisfied } from "@mui/icons-material"

export default function NoMatch () {
  return (
    <div className="noMatch">
      <div className="wrapper">
        <SentimentVeryDissatisfied style={{ fontSize: "150px" }}/>
        <div className="error">
          404
        </div>
        <div className="errorD">
          Page Not Found
        </div>
        <div>
          The Page you are looking for doesn't exist or an other error occured.
        </div>
        <div>
          <Link to="/dashboard" style={{ fontWeight: "bold" }}>Go back, </Link> or head over to <Link to="/" style={{ fontWeight: "bold" }} >Perfios.com</Link> to choose  new direction.
        </div>
      </div>        
    </div>
  )
}
