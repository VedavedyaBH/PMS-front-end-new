import React from "react";
import AdminService from "../AdminService";


export class AdminLogin extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
        admins: [],
        adminId: '',
        password : '',
        adm : ''
    }
    this.changeAdminIdHandler = this.changeAdminIdHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
}

componentDidMount(){
        
  AdminService.getAllAdmin().then ((res) =>{
      console.log(res.data);
      this.setState({admins : res.data});
      this.state.adm = (res.data);
  })
}

changeAdminIdHandler(event){
  this.setState({adminId:event.target.value})
}
changepasswordHandler(event){
  this.setState({password:event.target.value})
}
buttonClickHandler = (e) => {

  e.preventDefault();
  let find = 0;
  for (let i = 0; i < this.state.adm.length; i++) {

      if ((this.state.adminId == this.state.adm[i].adminId) && (this.state.password == this.state.adm[i].password)) {

          alert(" welcome Admin") ;
          find = 1;
          this.props.history.push("/"+this.state.adminId);
      }
  }
  if (find === 0) {
      alert("Inavlid Username or Password");
  }
}



    render(){
        return(
      <div className="Member">

      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group">
            <label>Enter id</label>
            <input type="text" name="adminId" Id="" className="form-control" placeholder="Id" 
            value={this.state.adminId} onChange = {this.changeAdminIdHandler}/>
        </div>
        <div className="form-group">
          <label>Enter Password</label>
            <input type="text" name="password" id="" className="form-control" placeholder="Password" 
            value={this.state.password} onChange = {this.changepasswordHandler}/>
          </div>

          <div>                                            
              <button className="btn btn-danger" onClick={this.buttonClickHandler}>Sign in</button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
      <div>
                   <footer className="style">
                    © 2022 Policy Management System
                    </footer>
                    </div>
    </div>
    
  )
}
}