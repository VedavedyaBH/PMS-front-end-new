import React from "react";
import UserService from "../service/UserService";

export class UserLogin extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
        users: [],
        userId: '',
        password : '',
        usr : ''
    }
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
}

componentDidMount(){
        
  UserService.getAllUsers().then ((res) =>{
      console.log(res.data);
      this.setState({users : res.data});
      this.state.usr = (res.data);
  })
}

changeUserIdHandler(event){
  this.setState({userId:event.target.value})
}
changepasswordHandler(event){
  this.setState({password:event.target.value})
}
buttonClickHandler = (e) => {

  e.preventDefault();
  let find = 0;
  for (let i = 0; i < this.state.usr.length; i++) {

      if ((this.state.userId == this.state.usr[i].userId) && (this.state.password == this.state.usr[i].password)) {

          alert(" welcome User") ;
          find = 1;
          this.props.history.push("/home");
      }
  }
  if (find === 0) {
      alert("Inavlid Username or Password");
  }
}



    render(){
        return(
      <div className="container">

      <form className="form-container">
        <div className="form-container-content">
          <h3 className="title">User Sign In</h3>
          <div className="form-group">
            <label>Enter User Id</label>
            <input type="text" name="userId" Id="" className="form-control" placeholder="UserId" 
            value={this.state.adminId} onChange = {this.changeUserIdHandler}/>
        </div>
        <div className="form-group">
          <label>Enter Password</label>
            <input type="password" name="password" id="" className="form-control" placeholder="Password" 
            value={this.state.password} onChange = {this.changepasswordHandler}/>
          </div>

          <div>                                            
              <button className="btn btn-danger" onClick={this.buttonClickHandler}>Sign in</button>
          </div>
          <p className="forgot-password text-right mt-2">
             <a href="/adduser">New User?</a>
          </p>
        </div>
      </form>
      
    </div>
    
  )
}
}