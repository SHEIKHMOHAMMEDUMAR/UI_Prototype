import Drop from "../../components/drop/Drop"
import "./home.css"
import { React, useState } from "react";
import { userData } from "../../data";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import Pyee from "../../components/pyee/Pyee";
import LSP from "../../components/lsp/LSP";

export default function Home() {
    const [selected, setselected] = useState("");
    return (
        <div className="home">
            <Drop selected={selected} setselected={setselected} />
            <FeatureInfo items={userData.featureInfo} />
            <Chart items={userData.charts} dataKey="Active User"/>
            <div className="homeWidgets">
                <Pyee items={userData.pieChart} dataKey="Active User"/>
                <LSP items={userData.Table}/>
            </div>
        </div>
    )
}