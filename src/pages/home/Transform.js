export const Transform = (data, cond) => {
    var userData = {};

    userData.featureInfo = [];
    userData.charts = [];
    userData.pieChart = [];
    userData.Table = [];
    let index = 0;
    let lspname = [];


    userData.featureInfo[0] = { title : "Total Applications" };
    userData.featureInfo[1] = { title : "Total Disbursed" };
    userData.featureInfo[2] = { title : "Total Rejected" };

    userData.featureInfo[0].data = data.length;
    userData.featureInfo[1].data = 0;
    userData.featureInfo[2].data = 0;

    userData.charts[0] = { title : "Pending Documentation" };
    userData.charts[1] = { title : "Pending Offer Acceptance" };
    userData.charts[2] = { title : "Pending Disbursment" };
    userData.charts[3] = { title : "Failed Transaction" };

    userData.charts[0].data = 0;
    userData.charts[1].data = 0;
    userData.charts[2].data = 0;
    userData.charts[3].data = 0;

    userData.charts[0].type = "Bar"; 
    userData.charts[1].type = "Area"; 
    userData.charts[2].type = "Bar"; 
    userData.charts[3].type = "Area";

    userData.charts[0].color = "#78efff"; 
    userData.charts[1].color = "#fc7d5d"; 
    userData.charts[2].color = "#4c75fc"; 
    userData.charts[3].color = "#b326ff";

    userData.charts[0].chartData = [];
    userData.charts[1].chartData = [];
    userData.charts[2].chartData = [];
    userData.charts[3].chartData = [];

    const seg_charts = (ind) => {
        userData.charts[ind].chartData[0] = { name: 'Jan', "Active User": 0 };
        userData.charts[ind].chartData[1] = { name: 'Feb', "Active User": 0 };
        userData.charts[ind].chartData[2] = { name: 'Mar', "Active User": 0 };
        userData.charts[ind].chartData[3] = { name: 'Apr', "Active User": 0 };
        userData.charts[ind].chartData[4] = { name: 'May', "Active User": 0 };
        userData.charts[ind].chartData[5] = { name: 'Jun', "Active User": 0 };
        userData.charts[ind].chartData[6] = { name: 'Jul', "Active User": 0 };
        userData.charts[ind].chartData[7] = { name: 'Aug', "Active User": 0 };
        userData.charts[ind].chartData[8] = { name: 'Sep', "Active User": 0 };
        userData.charts[ind].chartData[9] = { name: 'Oct', "Active User": 0 };
        userData.charts[ind].chartData[10] = { name: 'Nov', "Active User": 0 };
        userData.charts[ind].chartData[11] = { name: 'Dec', "Active User": 0 };
    }

    seg_charts(0);
    seg_charts(1);
    seg_charts(2);
    seg_charts(3);
    
    userData.pieChart = { title : "LSP Disbursals / Lender" };
    userData.pieChart.data = 0;
    userData.pieChart.chartData = [];

    const seg_data = (data_p) => {
        if(data_p.App_status === "Pending Documentation") {
            userData.charts[0].data += 1; 
            if(data_p.transaction.date.slice(5,7) === "01" ) {
                userData.charts[0].chartData[0]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "02" ) {
                userData.charts[0].chartData[1]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "03" ) {
                userData.charts[0].chartData[2]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "04" ) {
                userData.charts[0].chartData[3]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "05" ) {
                userData.charts[0].chartData[4]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "06" ) {
                userData.charts[0].chartData[5]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "07" ) {
                userData.charts[0].chartData[6]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "08" ) {
                userData.charts[0].chartData[7]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "09" ) {
                userData.charts[0].chartData[8]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "10" ) {
                userData.charts[0].chartData[9]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "11" ) {
                userData.charts[0].chartData[10]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "12" ) {
                userData.charts[0].chartData[11]["Active User"] += 1;
            }
        }
        else if(data_p.App_status === "Pending Offer Acceptance") {
            userData.charts[1].data += 1;
            if(data_p.transaction.date.slice(5,7) === "01" ) {
                userData.charts[1].chartData[0]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "02" ) {
                userData.charts[1].chartData[1]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "03" ) {
                userData.charts[1].chartData[2]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "04" ) {
                userData.charts[1].chartData[3]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "05" ) {
                userData.charts[1].chartData[4]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "06" ) {
                userData.charts[1].chartData[5]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "07" ) {
                userData.charts[1].chartData[6]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "08" ) {
                userData.charts[1].chartData[7]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "09" ) {
                userData.charts[1].chartData[8]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "10" ) {
                userData.charts[1].chartData[9]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "11" ) {
                userData.charts[1].chartData[10]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "12" ) {
                userData.charts[1].chartData[11]["Active User"] += 1;
            } 
        }
        else if(data_p.App_status === "Pending disbursment") {
            userData.charts[2].data += 1; 
            if(data_p.transaction.date.slice(5,7) === "01" ) {
                userData.charts[2].chartData[0]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "02" ) {
                userData.charts[2].chartData[1]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "03" ) {
                userData.charts[2].chartData[2]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "04" ) {
                userData.charts[2].chartData[3]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "05" ) {
                userData.charts[2].chartData[4]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "06" ) {
                userData.charts[2].chartData[5]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "07" ) {
                userData.charts[2].chartData[6]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "08" ) {
                userData.charts[2].chartData[7]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "09" ) {
                userData.charts[2].chartData[8]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "10" ) {
                userData.charts[2].chartData[9]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "11" ) {
                userData.charts[2].chartData[10]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "12" ) {
                userData.charts[2].chartData[11]["Active User"] += 1;
            }
        }
        else if(data_p.App_status === "Failed Transaction") {
            userData.charts[3].data += 1; 
            if(data_p.transaction.date.slice(5,7) === "01" ) {
                userData.charts[3].chartData[0]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "02" ) {
                userData.charts[3].chartData[1]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "03" ) {
                userData.charts[3].chartData[2]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "04" ) {
                userData.charts[3].chartData[3]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "05" ) {
                userData.charts[3].chartData[4]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "06" ) {
                userData.charts[3].chartData[5]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "07" ) {
                userData.charts[3].chartData[6]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "08" ) {
                userData.charts[3].chartData[7]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "09" ) {
                userData.charts[3].chartData[8]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "10" ) {
                userData.charts[3].chartData[9]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "11" ) {
                userData.charts[3].chartData[10]["Active User"] += 1;
            }
            else if(data_p.transaction.date.slice(5,7) === "12" ) {
                userData.charts[3].chartData[11]["Active User"] += 1;
            }
        }
        else if(data_p.App_status === "Disbursed"){
            userData.featureInfo[1].data += 1;
            userData.pieChart.data += 1;
        }
        else if(data_p.App_status === "Rejected"){
            userData.featureInfo[2].data += 1;
        }

        let n = lspname.indexOf(data_p.transaction.LSP); 
        if(n === -1){
            lspname.push(data_p.transaction.LSP);
            let obj = { name : data_p.transaction.LSP, "Active User" : 1};
            userData.pieChart.chartData.push(obj);
        }
        else{
            userData.pieChart.chartData[n]["Active User"] += 1; 
        }
        userData.Table[index] = { id : index };
        userData.Table[index].lsp = data_p.transaction.LSP;
        userData.Table[index].amount = data_p.transaction.amount;
        userData.Table[index].date = data_p.transaction.date;
        userData.Table[index].loan_type = data_p.transaction.loan_type;
        userData.Table[index].Trans_status = data_p.transaction.Trans_status;

        index += 1;
    } 

    const date = data[data.length-1].transaction.date;
    const init_day = date.slice(8,10);
    const init_month = date.slice(5,7);
    const init_year = date.slice(0,4);
    let count = 0;

    if(cond === "sevenDays"){
        for(let i=data.length-1; i>=0; i--){
            if(init_year - data[i].transaction.date.slice(0,4) === 0){
                if(init_month - data[i].transaction.date.slice(5,7) === 0){
                    if(init_day - data[i].transaction.date.slice(8,10) <= 6){
                        seg_data(data[i]);
                        count += 1;
                    }
                }
                else if(init_month - data[i].transaction.date.slice(5,7) === 1 && count < 7){
                    seg_data(data[i]);
                    count += 1;
                }
            }
            else if(init_year - data[i].transaction.date.slice(0,4) === 1 && count < 7){
                seg_data(data[i]);
                count += 1;
            }
        }
    }

    else if(cond === "oneMonth"){
        for(let i=data.length-1; i>=0; i--){
            if(init_year - data[i].transaction.date.slice(0,4) === 0){
                if(init_month - data[i].transaction.date.slice(5,7) <= 1){
                    seg_data(data[i]);
                    count += 1;
                }
            }
            else if(init_year - data[i].transaction.date.slice(0,4) === 1 && count < 30){
                seg_data(data[i]);
                count += 1;
            }
        }
    }

    else if(cond === "threeMonths"){
        for(let i=data.length-1; i>=0; i--){
            if(init_year - data[i].transaction.date.slice(0,4) === 0){
                if(init_month - data[i].transaction.date.slice(5,7) <= 3){
                    seg_data(data[i]);
                    count  += 1;
                }
            }
            else if(init_year - data[i].transaction.date.slice(0,4) === 1 && count < 90){
                seg_data(data[i]);
                count += 1;
            }
        }
    }

    else if(cond === "sixMonths"){
        for(let i=data.length-1; i>=0; i--){
            if(init_year - data[i].transaction.date.slice(0,4) === 0){
                if(init_month - data[i].transaction.date.slice(5,7) <= 6){
                    seg_data(data[i]);
                    count += 1;
                }
            }
            else if(init_year - data[i].transaction.date.slice(0,4) === 1 && count < 180){
                seg_data(data[i]);
                count += 1;
            }
        }
    }

    else if(cond === "oneYear"){
        for(let i=data.length-1; i>=0; i--){
            if((init_year - data[i].transaction.date.slice(0,4)) <= 1){
                seg_data(data[i]);
            }
        }
    }

    return(userData);
    
}