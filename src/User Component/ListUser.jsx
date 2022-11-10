import React, { Component } from "react";
import UserService from "../service/UserService";
import { Link } from "react-router-dom";


export class ListUser extends Component{
    constructor(props){
        super(props);
        this.state ={
            users: []

        }
    }
    componentDidMount(){
        UserService.getAllUsers().then ((res) =>{
            console.log(res.data);
            this.setState({users : res.data});
        })
    }
    deleteUser(userId){
        console.log(userId);
        UserService.deleteUser(userId).then(res =>{

            this.setState({users:this.state.users.filter(user => user.userId !== userId)});
            alert("user deleted successfully")
        })
    }
    updateuser(userId){

    }
    
    render(){
        return(
            <div>
                <h2 className =  "text-center">Users List</h2>
                <div className="row">
                    <table className="table table-striped table-inverse">
                        <thead >
                            <tr>
                                <th className="table-1">First Name</th>
                                <th className="table-1">Last Name</th>
                                <th className="table-1">User Name</th>
                                <th className="table-1">Pan</th>
                                <th className="table-1">Email</th>
                                <th className="table-1">Date of birth</th>
                                <th className="table-1">Phone Number</th>
                                <th className="table-1">Salary</th>
                                <th className="table-1">User Id</th>
                                <th className="table-1">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="table">
                              {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.pan}>
                                    <td className="table-1">{user.fName}</td>
                                    <td className="table-1">{user.lName}</td>
                                    <td className="table-1">{user.userName}</td>
                                    <td className="table-1">{user.pan}</td>
                                    <td className="table-1">{user.email}</td>
                                    <td className="table-1">{user.dob}</td>
                                    <td className="table-1">{user.pNumber}</td>
                                    <td className="table-1">{user.salary}</td>
                                    <td className="table-1">{user.userId}</td>
                                    <td >
                                         <button type="button" className="btn"  >
                                           <Link to={"/update/" + user.userId} className="stylelink">
                                                update
                                            </Link>
                                        </button>            
                                        <button className="btn" onClick={()=>this.deleteUser(user.userId)}>Delete</button>
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