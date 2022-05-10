export const Transform = (data) => {
    var userData = {};

    userData.featureInfo = [];
    userData.charts = [];
    userData.pieChart = [];
    userData.Table = [];

    userData.featureInfo[0] = { title : "Total Application" };
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

    userData.charts[0].chartData[0] = { name: 'Jan', "Active User": 0 };
    userData.charts[0].chartData[1] = { name: 'Feb', "Active User": 0 };
    userData.charts[0].chartData[2] = { name: 'Mar', "Active User": 0 };
    userData.charts[0].chartData[3] = { name: 'Apr', "Active User": 0 };
    userData.charts[0].chartData[4] = { name: 'May', "Active User": 0 };
    userData.charts[0].chartData[5] = { name: 'Jun', "Active User": 0 };
    userData.charts[0].chartData[6] = { name: 'Jul', "Active User": 0 };
    userData.charts[0].chartData[7] = { name: 'Aug', "Active User": 0 };
    userData.charts[0].chartData[8] = { name: 'Sep', "Active User": 0 };
    userData.charts[0].chartData[9] = { name: 'Oct', "Active User": 0 };
    userData.charts[0].chartData[10] = { name: 'Nov', "Active User": 0 };
    userData.charts[0].chartData[11] = { name: 'Dec', "Active User": 0 };

    userData.charts[1].chartData[0] = { name: 'Jan', "Active User": 0 };
    userData.charts[1].chartData[1] = { name: 'Feb', "Active User": 0 };
    userData.charts[1].chartData[2] = { name: 'Mar', "Active User": 0 };
    userData.charts[1].chartData[3] = { name: 'Apr', "Active User": 0 };
    userData.charts[1].chartData[4] = { name: 'May', "Active User": 0 };
    userData.charts[1].chartData[5] = { name: 'Jun', "Active User": 0 };
    userData.charts[1].chartData[6] = { name: 'Jul', "Active User": 0 };
    userData.charts[1].chartData[7] = { name: 'Aug', "Active User": 0 };
    userData.charts[1].chartData[8] = { name: 'Sep', "Active User": 0 };
    userData.charts[1].chartData[9] = { name: 'Oct', "Active User": 0 };
    userData.charts[1].chartData[10] = { name: 'Nov', "Active User": 0 };
    userData.charts[1].chartData[11] = { name: 'Dec', "Active User": 0 };

    userData.charts[2].chartData[0] = { name: 'Jan', "Active User": 0 };
    userData.charts[2].chartData[1] = { name: 'Feb', "Active User": 0 };
    userData.charts[2].chartData[2] = { name: 'Mar', "Active User": 0 };
    userData.charts[2].chartData[3] = { name: 'Apr', "Active User": 0 };
    userData.charts[2].chartData[4] = { name: 'May', "Active User": 0 };
    userData.charts[2].chartData[5] = { name: 'Jun', "Active User": 0 };
    userData.charts[2].chartData[6] = { name: 'Jul', "Active User": 0 };
    userData.charts[2].chartData[7] = { name: 'Aug', "Active User": 0 };
    userData.charts[2].chartData[8] = { name: 'Sep', "Active User": 0 };
    userData.charts[2].chartData[9] = { name: 'Oct', "Active User": 0 };
    userData.charts[2].chartData[10] = { name: 'Nov', "Active User": 0 };
    userData.charts[2].chartData[11] = { name: 'Dec', "Active User": 0 };

    userData.charts[3].chartData[0] = { name: 'Jan', "Active User": 0 };
    userData.charts[3].chartData[1] = { name: 'Feb', "Active User": 0 };
    userData.charts[3].chartData[2] = { name: 'Mar', "Active User": 0 };
    userData.charts[3].chartData[3] = { name: 'Apr', "Active User": 0 };
    userData.charts[3].chartData[4] = { name: 'May', "Active User": 0 };
    userData.charts[3].chartData[5] = { name: 'Jun', "Active User": 0 };
    userData.charts[3].chartData[6] = { name: 'Jul', "Active User": 0 };
    userData.charts[3].chartData[7] = { name: 'Aug', "Active User": 0 };
    userData.charts[3].chartData[8] = { name: 'Sep', "Active User": 0 };
    userData.charts[3].chartData[9] = { name: 'Oct', "Active User": 0 };
    userData.charts[3].chartData[10] = { name: 'Nov', "Active User": 0 };
    userData.charts[3].chartData[11] = { name: 'Dec', "Active User": 0 };

    userData.pieChart = { title : "LSP Disbursals / Lender" };
    userData.pieChart.data = 0;
    userData.pieChart.chartData = [];

    var index = 0;
    let lspname = [];

    { data.map( (i) => {
        if(i.App_status === "Pending Documentation") {
            userData.charts[0].data += 1; 
            if(i.transaction.date.slice(5,7) === "01" ) {
                userData.charts[0].chartData[0]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "02" ) {
                userData.charts[0].chartData[1]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "03" ) {
                userData.charts[0].chartData[2]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "04" ) {
                userData.charts[0].chartData[3]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "05" ) {
                userData.charts[0].chartData[4]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "06" ) {
                userData.charts[0].chartData[5]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "07" ) {
                userData.charts[0].chartData[6]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "08" ) {
                userData.charts[0].chartData[7]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "09" ) {
                userData.charts[0].chartData[8]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "10" ) {
                userData.charts[0].chartData[9]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "11" ) {
                userData.charts[0].chartData[10]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "12" ) {
                userData.charts[0].chartData[11]["Active User"] += 1;
            }
        }
        else if(i.App_status === "Pending Offer Acceptance") {
            userData.charts[1].data += 1;
            if(i.transaction.date.slice(5,7) === "01" ) {
                userData.charts[1].chartData[0]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "02" ) {
                userData.charts[1].chartData[1]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "03" ) {
                userData.charts[1].chartData[2]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "04" ) {
                userData.charts[1].chartData[3]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "05" ) {
                userData.charts[1].chartData[4]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "06" ) {
                userData.charts[1].chartData[5]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "07" ) {
                userData.charts[1].chartData[6]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "08" ) {
                userData.charts[1].chartData[7]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "09" ) {
                userData.charts[1].chartData[8]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "10" ) {
                userData.charts[1].chartData[9]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "11" ) {
                userData.charts[1].chartData[10]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "12" ) {
                userData.charts[1].chartData[11]["Active User"] += 1;
            } 
        }
        else if(i.App_status === "Pending disbursment") {
            userData.charts[2].data += 1; 
            if(i.transaction.date.slice(5,7) === "01" ) {
                userData.charts[2].chartData[0]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "02" ) {
                userData.charts[2].chartData[1]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "03" ) {
                userData.charts[2].chartData[2]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "04" ) {
                userData.charts[2].chartData[3]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "05" ) {
                userData.charts[2].chartData[4]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "06" ) {
                userData.charts[2].chartData[5]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "07" ) {
                userData.charts[2].chartData[6]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "08" ) {
                userData.charts[2].chartData[7]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "09" ) {
                userData.charts[2].chartData[8]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "10" ) {
                userData.charts[2].chartData[9]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "11" ) {
                userData.charts[2].chartData[10]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "12" ) {
                userData.charts[2].chartData[11]["Active User"] += 1;
            }
        }
        else if(i.App_status === "Failed Transaction") {
            userData.charts[3].data += 1; 
            if(i.transaction.date.slice(5,7) === "01" ) {
                userData.charts[3].chartData[0]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "02" ) {
                userData.charts[3].chartData[1]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "03" ) {
                userData.charts[3].chartData[2]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "04" ) {
                userData.charts[3].chartData[3]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "05" ) {
                userData.charts[3].chartData[4]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "06" ) {
                userData.charts[3].chartData[5]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "07" ) {
                userData.charts[3].chartData[6]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "08" ) {
                userData.charts[3].chartData[7]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "09" ) {
                userData.charts[3].chartData[8]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "10" ) {
                userData.charts[3].chartData[9]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "11" ) {
                userData.charts[3].chartData[10]["Active User"] += 1;
            }
            else if(i.transaction.date.slice(5,7) === "12" ) {
                userData.charts[3].chartData[11]["Active User"] += 1;
            }
        }
        else if(i.App_status === "Disbursed"){
            userData.featureInfo[1].data += 1;
            userData.pieChart.data += 1;
        }
        else if(i.App_status === "Rejected"){
            userData.featureInfo[2].data += 1;
        }

        let n = lspname.indexOf(i.transaction.LSP); 
        if(n === -1){
            lspname.push(i.transaction.LSP);
            let obj = { name : i.transaction.LSP, "Active User" : 1};
            userData.pieChart.chartData.push(obj);
        }
        else{
            userData.pieChart.chartData[n]["Active User"] += 1; 
        }
        userData.Table[index] = { id : index };
        userData.Table[index].lsp = i.transaction.LSP;
        userData.Table[index].amount = i.transaction.amount;
        userData.Table[index].date = i.transaction.date;
        userData.Table[index].loan_type = i.transaction.loan_type;
        userData.Table[index].Trans_status = i.transaction.Trans_status;

        index += 1;
        }
    )}
    return(userData);
}