import "./advancedsearch.css"

const AdvancedSearch = () => {
  return (
    <div className="advancedsearch">
        <div className="wrapper">
            <div className="component a">
                <div className="advitem">
                    Applicant Name
                    <div>
                        <input type="text" className="input"/>
                    </div>
                </div>
                <div className="advitem">
                    Mobile Number
                    <div>
                    <input type="text" className="input"/>
                    </div>
                </div>
                <div className="advitem">
                    PAN Number 
                    <div>
                    <input type="text" className="input"/>
                    </div>
                    </div>
                <div className="advitem">
                    GST Number
                    <div>
                    <input type="text" className="input"/>
                    </div>
                </div>
            </div>
            <div className="component b">
                <div className="advitem">
                    Loan Type
                    <div>
                        <select /*onChange = {updatedFilterData}*/ className="input" >
                            <option value="alltype">All Type</option>
                            <option value="payslip">Pay-slip</option>
                            <option value="invoice">Invoice Financing</option>
                        </select>
                    </div>
                </div>
                <div className="advitem amount">
                    Amount
                    <div>
                        <input type="text" placeholder="Min" className="input m"/>
                        <input type="text" placeholder="Max" className="input m"/>
                    </div>
                </div>
                <div className="advitem">
                    Transaction Status
                    <div>
                        <select /*onChange = {updatedFilterData}*/ className="input">
                            <option value="all">All</option>
                            <option value="pending">Pending Docs</option> 
                            <option value="rejected">Rejected</option> 
                            <option value="approved">Approved</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="component c">
                <div>
                    <a href=" " className="link">Hide</a>
                    <a href=" " className="link">Clear All</a>
                </div>
                <button className="button">Search Transactions</button>
            </div>
        </div>
    </div>
  )
}
export default AdvancedSearch;