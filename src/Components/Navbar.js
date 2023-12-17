import "./Navbar.css";
import {Component} from "react";
import { FaMessage } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import NavieoLogo from "D:/React project/demo/src/img/NavieoLogo.jpeg";

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return (
        <>
            <nav>
                <img src={NavieoLogo} alt="Logo"></img>
                <div>
                    <ul id="navbar" className={this.state.clicked?"#navbar active" : "#navbar"}>
                        <li><a href="#"><FaInfo/></a></li>
                        <li><a href="#"><FaMessage/></a></li>
                        <li><a href="#"><FaRegBell/></a></li>
                        <li><a href="#"><FaRegUser/></a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
            </nav>
        </>
    );
}
}

export default Navbar;