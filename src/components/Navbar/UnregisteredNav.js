import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import './Navbar.css';
import logo from '../../assets/RPPLogoPlaceholder.png';


//Pages

import calculator from '../../pages/calculator.js';

const { Item } = Menu;

const rightStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 11.5
}

/* TODO:
    - add light dark mode functionality
    - route page tabs
    - style according to style guide
    - remove hover border
*/

const UnregisteredNav = () => {

    return (
        <div>
            
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["Home"]}>
                    <Item style={{borderBottom:'none'}}>
                        <img className="logo" src={logo}/>
                    </Item>
                    
                    <Item key="Home">
                        <Link to='/home'>Home</Link>
                    </Item>
                    
                    <Item key="Calculator">
                        
                        <Link to='/calculator'>Calculator</Link>
                         
                    </Item>
                                        
                    <Item key="ContactUs">
                        <Link to='/contactUs'>Contact Us</Link>
                    </Item>                 
            </Menu>

            <Menu theme="light" mode="horizontal"  style={ rightStyle }>
                <Link to='/register'>
                    <Button type="link"  style={{paddingRight: 30, paddingTop: 8}}>Need an Account?</Button>
                </Link>
                <Link to='/login'>
                    <Button className="loginButton">Login</Button>   
                </Link>  
            </Menu>           
                   
        </div>
    );
}

export default UnregisteredNav;