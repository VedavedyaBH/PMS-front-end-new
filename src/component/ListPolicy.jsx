import React, { Component } from "react";
import PolicyService from "../service/PolicyService";
import { Link } from "react-router-dom";
export class ListPolicy extends Component{
    constructor(props){
        super(props);
        this.state = {
            policys: []
        }
        
    }
    
    componentDidMount(){
        PolicyService.getAllPolicy().then ((res) =>{
            console.log(res.data);
            this.setState({policys : res.data});
        })
    }
    deletePolicy(policyId){
        console.log(policyId);
        PolicyService.deletePolicy(policyId).then(res =>{

            this.setState({policys:this.state.policys.filter(policy => policy.policyId !== policyId)});
            alert("policy deleted successfully")
        })
    }
    updatePolicy(policyId){

    }
    
    render(){
        return(
            <div>
                <h2 className =  "text-center">Policy List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead >
                            <tr>
                                <th className="table-1">Policy Name</th>
                                <th className="table-1">Policy Type</th>
                                <th className="table-1">Term Account</th>
                                <th className="table-1">Start Date</th>
                                <th className="table-1">Company Name</th>
                                <th className="table-1">Duration</th>
                                <th className="table-1">Intial Deposit</th>
                                <th className="table-1">User Type</th>
                                <th className="table-1">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="table">                              {
                                this.state.policys.map(
                                    policy =>
                                    <tr key={policy.policyId}>
                                        <td className="table-1"> {policy.policyName}</td>
                                        <td className="table-1">{policy.policyType}</td>
                                        <td className="table-1">{policy.termAccount}</td>
                                        <td className="table-1">{policy.startDate}</td>
                                        <td className="table-1">{policy.companyName}</td>
                                        <td className="table-1">{policy.duration}</td>
                                        <td className="table-1">{policy.intialDeposit}</td>
                                        <td className="table-1">{policy.userType}</td>
                                       
                                        <td >
                                        <button type="button" className="btn btn-success" style={{marginRight:"10px"}}>
                                           <Link to={"/updatepolicy/" + policy.policyId} className="stylelink">
                                                update
                                            </Link>
                                        </button>            
                                        <button className="btn btn-danger" onClick={()=>this.deletePolicy(policy.policyId)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                              }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }

}