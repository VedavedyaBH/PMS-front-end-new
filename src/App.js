// import logo from './logo.svg';

import './App.css';
import Header from './component/Header';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './component/Home';
import { AddPolicy } from './component/AddPolicy';
import { ListPolicy } from './component/ListPolicy';
import { UpdatePolicy } from './component/UpdatePolicy';
import PolicyTypes from './component/PolicyTypes';
import { ListUser } from './User Component/ListUser';
import { AddUser } from './User Component/AddUser';
import { UpdateUserComponent } from './User Component/UpdateUser';
import { AdminLogin } from './Auth/LoginAdmin';
import { UserLogin } from './Auth/LoginUser';
import { AddAddress } from './AddressComponent/AddAddress';

function App() {
  return (
    <div >
      
    <BrowserRouter>
    
    <Header/>
    <div className='Container-fluid'>
      <Switch>
        <Route path="/loginAdmin" component={AdminLogin}  ></Route>
        <Route path="/loginUser" component={UserLogin}  ></Route>
        <Route path="/addpolicy" component={AddPolicy}  ></Route>
        <Route path="/listpolicy" component={ListPolicy}  ></Route>
        <Route path="/home" exact component={Home}  ></Route>
        <Route path="/updatepolicy/:Id"  component={UpdatePolicy}  ></Route>
        <Route path="/policytypes"  component={PolicyTypes}  ></Route>    
        <Route path="/listuser" component={ListUser}  ></Route>
        <Route path="/adduser" component={AddUser}></Route>
        <Route path="/update/:Id" component={UpdateUserComponent}></Route>
        <Route path="/addaddress" component={AddAddress}></Route>




      </Switch>
      </div>
    </BrowserRouter>
    </div>
  )}

export default App;
