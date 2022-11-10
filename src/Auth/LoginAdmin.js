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
          this.props.history.push("/addpolicy");
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
          <h3 className="title">Admin Sign In</h3>
          <div className="form-group">
            <label>Enter Admin Id</label>
            <input type="text" name="adminId" Id="" className="form-control" placeholder="AdminId" 
            value={this.state.adminId} onChange = {this.changeAdminIdHandler}/>
        </div>
        <div className="form-group">
          <label>Enter Password</label>
            <input type="password" name="password" id="" className="form-control" placeholder="Password" 
            value={this.state.password} onChange = {this.changepasswordHandler}/>
          </div>

          <div>                                            
              <button className="btn btn-danger" onClick={this.buttonClickHandler}>Sign in</button>
          </div>
         
        </div>
      </form>
     
    </div>
    
  )
}
}