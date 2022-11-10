import React,{ Component } from "react";
import PolicyService from "../service/PolicyService";

export class UpdatePolicy extends Component{
    constructor(props){
        super(props);
        this.state ={
            policyId : this.props.match.params.Id,
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
        
        this.updatePolicy = this.updatePolicy.bind(this)

    }
    componentDidMount(){
        PolicyService.getPolicy(this.state.policyId).then((res) =>{
            console.log(res.data)
            let policy = res.data;
            
            this.setState({
                policyName: policy.policyName,
                policyType: policy.policyType,
                termAccount: policy.termAccount,
                startDate: policy.startDate,
                companyName: policy.companyName,
                duration: policy.duration,
                intialDeposit: policy.intialDeposit,
                userType: policy.userType,

            });
        });
    }
    updatePolicy = (e) => {
        e.preventDefault();
        let policy ={
            policyName: this.state.policyName,
                policyType: this.state.policyType,
                termAccount: this.state.termAccount,
                startDate: this.state.startDate,
                companyName: this.state.companyName,
                duration: this.state.duration,
                intialDeposit: this.state.intialDeposit,
                userType: this.state.userType


        }
        console.log('policy =>'+JSON.stringify(policy));
        PolicyService.updatePolicy(policy,this.state.policyId).then(res => {
            console.log(policy,this.state.policyId);
            alert("policy updated successfully")
        });
        this.props.history.push("/listPolicy");
    }
    cancel(){
        alert("leaving witout saving...")
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
                <div className="container">
                    <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Edit policy</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Policy Name</label>
                                  <input type="text" name="policyName" id="" className="form-control" placeholder="Enter PolicyName" 
                                   defaultValue={this.state.policyName} onChange={this.changePolicyNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Policy Type</label>
                                  <input type="text" name="policyType" id="" className="form-control" placeholder="Enter policyType" 
                                   defaultValue={this.state.policyType} onChange={this.changePolicyTypeHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Term Account</label>
                                  <input type="text" name="termAccount" id="" className="form-control" placeholder="Enter termaccount" 
                                   defaultValue={this.state.termAccount} onChange={this.changeTermAccountHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Start Date</label>
                                  <input type="text" name="startDate" id="" className="form-control" placeholder="Enter startDate" 
                                   defaultValue={this.state.startDate} onChange={this.changeStartDateHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Company Name</label>
                                  <input type="text" name="companyName" id="" className="form-control" placeholder="Enter companyName" 
                                   defaultValue={this.state.companyName} onChange={this.changeCompanyNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Duration</label>
                                  <input type="text" name="duration" id="" className="form-control" placeholder="Enter duration" 
                                   defaultValue={this.state.duration} onChange={this.changeDurationHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Intial Deposit</label>
                                  <input type="text" name="intialDeposit" id="" className="form-control" placeholder="Enter intialDeposit" 
                                   defaultValue={this.state.intialDeposit} onChange={this.changeIntialDepositHandler} />
                                </div>
                                <div className="form-group">
                                  <label >User Type</label>
                                  <input type="text" name="userType" id="" className="form-control" placeholder="Enter userType" 
                                   defaultValue={this.state.userType} onChange={this.changeUserTypeHandler} />
                                </div>

                                <button type="button" className="btn btn-success" onClick={this.updatePolicy}>Update</button>
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