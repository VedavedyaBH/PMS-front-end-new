import React, { Component } from "react";
import PolicyService from "../service/PolicyService";
 export class AddPolicy extends Component {
    constructor(props){
        super(props);
        this.state={
            
            policyName: '',
            policyType: '',
            termAccount: '',
            startDate: '',
            companyName: '',
            duration: '',
            intialDeposit: '',
            userType: '',
           
        
        
        }
        
        this.changePolicyNameHandler = this.changePolicyNameHandler.bind(this);
        this.changePolicyTypeHandler = this.changePolicyTypeHandler.bind(this);
        this.changeTermAccountHandler = this.changeTermAccountHandler.bind(this);
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeIntialDepositHandler= this.changeIntialDepositHandler.bind(this);
        this.changeUserTypeHandler = this.changeUserTypeHandler.bind(this);
        
        this.savePolicy = this.savePolicy.bind(this)
            }
        
            savePolicy =(e) => {
                e.preventDefault();
                let policy = {
                    policyName : this.state.policyName,
                    policyType: this.state.policyType,
                    termAccount: this.state.termAccount,
                    startDate: this.state.startDate,
                    companyName: this.state.companyName,
                    duration: this.state.duration,
                    intialDeposit: this.state.intialDeposit,
                    userType: this.state.userType
        
                }
                console.log('policy =>' + JSON.stringify(policy))
                PolicyService.createPolicy(policy).then(res => {
                    alert("policy added successfully....")
                })
                this.props.history.push("/home")

                
            }
            cancel(){
                alert("leaving with out saving.....")
                this.props.history.push("/home")

            }
        
            changePolicyNameHandler(event){
                this.setState({policyName:event.target.value})
            }
            changePolicyTypeHandler(event){
                this.setState({policyType:event.target.value})
            }
            changeTermAccountHandler(event){
                this.setState({termAccount:event.target.value})
        
            }
            changeStartDateHandler(event){
                this.setState({startDate:event.target.value})
            }
        
            changeCompanyNameHandler(event){
                this.setState({companyName:event.target.value})
            }
            changeDurationHandler(event){
                this.setState({duration:event.target.value})

            }
            changeIntialDepositHandler(event){
                this.setState({intialDeposit:event.target.value})
            }
            changeUserTypeHandler(event){
                this.setState({userType:event.target.value})
            }
    render(){
        return(
            <div>
                <br></br>
                <div>
                <div className="container">
                <div className="form-container">
                            <h2 className="title">Policy Registration</h2>
                        <div className="form-container-content ">
                            <form>
                                <div className="form-group">
                                  <label >Policy Name</label>
                                  <input type="text" name="policyName" id="" className="form-control" placeholder="Enter PolicyName" 
                                   value={this.state.policyName} onChange={this.changePolicyNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Policy Type</label>
                                  <input type="text" name="policyType" id="" className="form-control" placeholder="Enter PolicyType" 
                                   value={this.state.policyType} onChange={this.changePolicyTypeHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Term Account</label>
                                  <input type="text" name="termAccount" id="" className="form-control" placeholder="Enter TermAccount" 
                                   value={this.state.termAccount} onChange={this.changeTermAccountHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Start Date</label>
                                  <input type="date" name="startDate" id="" className="form-control" placeholder="Enter StartDate" 
                                   value={this.state.startDate} onChange={this.changeStartDateHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Company Name</label>
                                  <input type="text" name="companyName" id="" className="form-control" placeholder="Enter CompanyName" 
                                   value={this.state.companyName} onChange={this.changeCompanyNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Duration</label>
                                  <input type="text" name="duration" id="" className="form-control" placeholder="Enter Duration" 
                                   value={this.state.duration} onChange={this.changeDurationHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Intial Deposit</label>
                                  <input type="text" name="intialDeposit" id="" className="form-control" placeholder="Enter IntialDeposit" 
                                   value={this.state.intialDeposit} onChange={this.changeIntialDepositHandler} />
                                </div>
                                <div className="form-group">
                                  <label >User Type</label>
                                  <input type="text" name="userType" id="" className="form-control" placeholder="Enter UserType" 
                                   value={this.state.userType} onChange={this.changeUserTypeHandler} />
                                </div>

                                <button type="button" className="btn btn-success" onClick={this.savePolicy}>Submit</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }



    }
 
