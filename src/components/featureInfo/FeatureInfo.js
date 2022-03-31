import "./featureInfo.css"
import { React, useState } from "react";

export default function FeatureInfo({items}) {
    const [item] = useState(items);
    return (
    <div className="featured">
        {item.map((i)=>(
            <div className="featuredItem">
                <span className="featuredMoney">{i.data}</span>
                <span className="featuredTitle">{i.title}</span>
            </div>
        ))}
    </div>
    )
}