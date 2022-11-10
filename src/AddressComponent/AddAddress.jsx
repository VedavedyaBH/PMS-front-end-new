import React,{ Component } from "react";
import AddressService from "../service/AddressService";
export class AddAddress extends Component{
    constructor(props){
        super(props);
        this.state={
            state:'',
            city:'',
            
			
    }

    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
   
    
    this.saveAddress = this.saveAddress.bind(this)
    }
    saveAddress = (e) => {
        e.preventDefault();
        let address = {
            state:this.state.state,
            city:this.state.city,
			
                }
                console.log('address =>' + JSON.stringify(address))
                AddressService.createAddress(address).then(res => {
                    alert("Address added successfully....")
                })
                
    }
    cancel(){
        alert("leaving with out saving.....")
    }
  
    changeStateHandler(event){
        this.setState({state:event.target.value})
    }
    changeCityHandler(event){
        this.setState({city:event.target.value})
    }
   
    render(){
        return(
            <div>
                <br></br>
                <div>
                <div className="container">
                <div className="form-container">
                            <h2 className="title">Address </h2>
                        <div className="form-container-content">
                            <form>
                              
                                <div className="form-group">
                                  <label >State</label>
                                  <input type="text" name="state" id="" className="form-control" placeholder="Enter state" 
                                   value={this.state.state} onChange={this.changeStateHandler} />
                                </div>
                                <div className="form-group">
                                  <label >City</label>
                                  <input type="text" name="city" id="" className="form-control" placeholder="Enter city" 
                                   value={this.state.city} onChange={this.changeCityHandler} />
                                </div>
                               
                                

                                <button type="button" className="btn btn-success" onClick={this.saveAddress}>Submit</button>
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