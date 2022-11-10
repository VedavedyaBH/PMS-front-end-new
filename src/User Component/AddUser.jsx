import React,{ Component} from "react";
import UserService from "../service/UserService";

export class AddUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            pan: '',
            fName: '',
            lName: '',
            userName: '',
            email: '',
            dob: '',
            pNumber: '',
            salary: '',
            city:'',
            password:'',
           
        }
        this.changeUserPanHandler = this.changeUserPanHandler.bind(this);
        this.changeUserFnameHandler = this.changeUserFnameHandler.bind(this);
        this.changeUserLnameHandler = this.changeUserLnameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserEmailHandler = this.changeUserEmailHandler.bind(this);
        this.changeUserDobHandler = this.changeUserDobHandler.bind(this);
        this.changeUserPnumberHandler = this.changeUserPnumberHandler.bind(this);
        this.changeUserSalHandler = this.changeUserSalHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);




        this.saveUser = this.saveUser.bind(this)
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            pan: this.state.pan,
            fName: this.state.fName,
            lName: this.state.lName,
            userName: this.state.userName,
            email: this.state.email,
            dob: this.state.dob,            
            pNumber: this.state.pNumber,
            salary: this.state.salary,
        }
        console.log('user =>' + JSON.stringify(user))
        UserService.createUser(user).then(res => {
            alert("Add address")
        })
        this.props.history.push("/addaddress")
        
    }
    cancel(){
        alert("leaving with out saving.....")
    }
    changeUserPanHandler(event){
        this.setState({pan:event.target.value})
    }
    changeUserFnameHandler(event){
        this.setState({fName:event.target.value})
    }
    changeUserLnameHandler(event){
        this.setState({lName:event.target.value})
    }
    changeUserNameHandler(event){
        this.setState({userName:event.target.value})
    }
    changeUserEmailHandler(event){
        this.setState({email:event.target.value})
    }
    changeUserDobHandler(event){
        this.setState({dob:event.target.value})
    }
    changeUserPnumberHandler(event){
        this.setState({pNumber:event.target.value})
    }
    changeUserSalHandler(event){
        this.setState({salary:event.target.value})
    }
  
    changeCityHandler(event){
        this.setState({city:event.target.value})
    }
    changePasswordHandler(event){
        this.setState({password:event.target.value})
    }
render() {
return (
    <div>
        <br ></br>
        <div className="container">
            <div>
                <div className="form-container">
                    <h2 className="title">Add User</h2>
                <div className="form-container-content">
                    <form>
                        <div className="form-group">
                          <label >Pan</label>
                          <input type="text" name="pan" id="" className="form-control" 
                           value={this.state.pan} onChange={this.changeUserPanHandler} />
                        </div>
                        <div className="form-group">
                          <label >First Name</label>
                          <input type="text" name="fName" id="" className="form-control" 
                           value={this.state.fName} onChange={this.changeUserFnameHandler} />
                        </div>
                        <div className="form-group">
                          <label >Last Name</label>
                          <input type="text" name="lName" id="" className="form-control" 
                           value={this.state.lName} onChange={this.changeUserLnameHandler} />
                        </div>
                      
                        <div className="form-group">
                          <label >User Name</label>
                          <input type="text" name="userName" id="" className="form-control" 
                           value={this.state.userName} onChange={this.changeUserNameHandler} />
                        </div>
                        <div className="form-group">
                          <label >Email</label>
                          <input type="email" name="email" id="" className="form-control"  
                           value={this.state.email} onChange={this.changeUserEmailHandler} />
                        </div>
                        <div className="form-group">
                          <label >Date of birth</label>
                          <input type="date" name="date" id="" className="form-control" 
                           value={this.state.dob} onChange={this.changeUserDobHandler} />
                        </div>
                        <div className="form-group">
                          <label >Phone Number</label>
                          <input type="number" name="pNumber" id="" className="form-control"  
                           value={this.state.pNumber} onChange={this.changeUserPnumberHandler} />
                        </div>
                        <div className="form-group">
                          <label >Salary</label>
                          <input type="number" name="pNumber" id="" className="form-control"  
                           value={this.state.salary} onChange={this.changeUserSalHandler} />
                        </div>
                        <div className="form-group">
                          <label >Password</label>
                          <input type="password" name="password" id="" className="form-control"  
                           value={this.state.password} onChange={this.changePasswordHandler} />
                        </div>
                       
                        
                        <button type="button" className="btn btn-success" onClick={this.saveUser}>Add</button>
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