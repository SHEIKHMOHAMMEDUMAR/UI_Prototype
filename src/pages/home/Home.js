import { userData1 } from '../../Data1';
import { userData2 } from '../../Data2';
import { userData3 } from '../../Data3';
import { userData4 } from '../../Data4';
import { userData5 } from '../../Data5';
import React from 'react';
import "./home.css"
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import Pyee from "../../components/pyee/Pyee";
import LSP from "../../components/lsp/LSP";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userData: userData1 };
    }
    seldata = (e) => {
        if(e.target.value === "sevenDays"){
            this.setState({userData : userData1});
        }
        else if(e.target.value === "oneMonth"){
            this.setState({userData : userData2});
        }
        else if(e.target.value === "threeMonths"){
            this.setState({userData : userData3});
        }
        else if(e.target.value === "sixMonths"){
            this.setState({userData : userData4});
        }
        else{
            this.setState({userData : userData5});
        }
    }
    render () {
        return (
            <div className="home">
                <div className="drop">
                    <select onChange={this.seldata}> 
                        <option value="sevenDays">Last 7 days</option> 
                        <option value="oneMonth">Last 1 month</option> 
                        <option value="threeMonths">Last 3 months</option> 
                        <option value="sixMonths">Last 6 months</option>
                        <option value="oneYear">Last 1 year</option> 
                    </select>
                </div>
                <FeatureInfo items={this.state.userData.featureInfo} />
                <Chart items={this.state.userData.charts} dataKey="Active User"/>
                <div className="homeWidgets">
                    <Pyee items={this.state.userData.pieChart} dataKey="Active User"/>
                    <LSP items={this.state.userData.Table}/>
                </div>
            </div>
        );
    }
}
export default Home;