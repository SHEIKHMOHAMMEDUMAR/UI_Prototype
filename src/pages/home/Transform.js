export const Transform = (data, cond) => {
    
    let userData = {};
    if (data.length === 0){
        userData.featureInfo = [];
        userData.charts = [];
        userData.pieChart = [];
        userData.Table = [];
        return(userData);
    }

    else {
        userData.featureInfo = [];
        userData.charts = [];
        userData.pieChart = [];
        userData.Table = [];
        let index = 0;
        let lspname = [];

        const f_title = [ "Total Applications", "Total Disbursed", "Total Rejected" ];
        const f_data = [ data.length, 0, 0 ];
        for( let i = 0 ; i < 3 ; i++ ){
            userData.featureInfo[i] = { title : f_title[i] };
            userData.featureInfo[i].data = f_data[i];
        }

        const c_title = [ "Pending Documentation", "Pending Offer Acceptance", "Pending Disbursment", "Failed Transaction" ];
        const c_type = [ "Bar", "Area" ];
        const c_color = [ "#78efff", "#fc7d5d", "#4c75fc", "#b326ff" ];

        for( let i = 0; i < 4; i++ ){
            userData.charts[i] = { title : c_title[i] };
            userData.charts[i].data = 0;
            userData.charts[i].type = c_type[i%2];
            userData.charts[i].color = c_color[i]; 
            userData.charts[i].chartData = [];
        }

        const seg_charts = (ind) => {
            const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
            for( let i = 0 ; i < 12 ; i++ ){
                userData.charts[ind].chartData[i] = { name: month[i], "Active User": 0 };
            }
        }

        for( let i = 0; i < 4; i++ ){
            seg_charts(i);
        }
        
        userData.pieChart = { title : "LSP Disbursals / Lender" };
        userData.pieChart.data = 0;
        userData.pieChart.chartData = [];

        const seg_data = (data_p) => {
            if(data_p.App_status === "Pending Documentation") {
                userData.charts[0].data += 1; 
                const a = parseInt(data_p.transaction.date.slice(5,7));
                userData.charts[0].chartData[a-1]["Active User"] += 1;
            }
            else if(data_p.App_status === "Pending Offer Acceptance") {
                userData.charts[1].data += 1;
                const a = parseInt(data_p.transaction.date.slice(5,7));
                userData.charts[1].chartData[a-1]["Active User"] += 1; 
            }
            else if(data_p.App_status === "Pending disbursment") {
                userData.charts[2].data += 1; 
                const a = parseInt(data_p.transaction.date.slice(5,7));
                userData.charts[2].chartData[a-1]["Active User"] += 1;
            }
            else if(data_p.App_status === "Failed Transaction") {
                userData.charts[3].data += 1; 
                const a = parseInt(data_p.transaction.date.slice(5,7));
                userData.charts[3].chartData[a-1]["Active User"] += 1;
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
                    count += 1;
                }
                else if(init_year - data[i].transaction.date.slice(0,4) === 1){
                seg_data(data[i]);
                count += 1;
                }
            }
        }      
        return(userData);       
    }
}