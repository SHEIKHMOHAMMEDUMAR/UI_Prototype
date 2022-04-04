import "./featureInfo.css"
import { React} from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function FeatureInfo({items, isLoading}) {
    return isLoading ? (
    <div className="featured">
        {items.map((i)=>(
            <div className="featuredItem">
                <span className="featuredMoney">{i.data}</span>
                <span className="featuredTitle">{i.title}</span>
                </div>))}
            </div> ) : 

  (  <div className="featured">
        {items.map((i)=>(
            <div className="featuredItem">
                <div><CircularProgress size={30}/></div>
                <span className="featuredTitle">  {i.title}</span>   
            </div>
        ))}
    </div>
)
}