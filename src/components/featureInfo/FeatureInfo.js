import "./featureInfo.css"
import { React} from "react";
import ContentLoader from "react-content-loader"

export default function FeatureInfo({items, isLoading}) {
    return ( isLoading || items === undefined || items.length === 0 ) ? (
        <div className="featured">
            <div className="featuredItem">
                <div className="title">
                    <ContentLoader style={{width: "50%"}} viewBox="0 0 380 70">
                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    </ContentLoader>
                </div>   
            </div>
        </div> 
        ) : 
        ( 
            <div className="featured">
                {items.map((i)=>(
                    <div className="featuredItem">
                        <span className="featuredMoney">{i.data}</span>
                        <span className="featuredTitle">{i.title}</span>
                    </div>))}
            </div> 
        )
}