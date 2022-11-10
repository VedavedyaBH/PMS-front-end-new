import React,{ Component } from "react";
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

import image5 from '../assets/image5.jpg';
 export default class PolicyTypes extends Component{
    
    render(){
        return(
            
           <div class = "card-deck">
            <div className="card" >
                <img className="card-img-top" src={image5} alt="Policy"/>
                <div className="card-body">
                    <h4 className="card-title">Life Insurance</h4>
                    <p className="card-text">Do policy and secure your future</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={image2} alt="Policy"/>
                <div className="card-body">
                    <h4 className="card-title">Child policy</h4>
                    <p className="card-text">Ensure child plans</p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src={image3} alt="Policy"/>
                <div className="card-body">
                    <h4 className="card-title">House Insurance</h4>
                    <p className="card-text">Live happily in your beautiful house</p>
                </div>
            </div>
    
           </div>

        )
    }

 }