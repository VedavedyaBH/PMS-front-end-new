import React,{ Component } from "react";
import NavBar from "./NavBar";

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <header>
                    <NavBar/>
                </header>
            </div>
        )
    }

}