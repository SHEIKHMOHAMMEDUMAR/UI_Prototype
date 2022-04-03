import "./featureInfo.css"
import { React } from "react";

export default function FeatureInfo({items}) {
    return (
    <div className="featured">
        {items.map((i)=>(
            <div className="featuredItem">
                <span className="featuredMoney">{i.data}</span>
                <span className="featuredTitle">{i.title}</span>
            </div>
        ))}
    </div>
    )
}