import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import './Navbar.css';
import logo from '../../assets/RPPLogoPlaceholder.png';

const { Item } = Menu;

/* TODO:
    - add light dark mode functionality
    - route page tabs
    - style according to style guide
    - remove hover border
*/

const UnregisteredNav = () => {

    return (
        <div>
            
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["Home"]} className="leftStyle">
                <Item style={{borderBottom:'none'}}>
                    <Link to='/home'><img className="logo" src={logo} alt="Logo"/></Link>
                </Item>
                    
                <Item key="Home">
                    <Link to='/home'>Home</Link>
                </Item>
                    
                <Item key="Dashboard">        
                    <Link to='/dashboard'>Dashboard</Link>     
                </Item>

                <Item key="Calculator">        
                    <Link to='/calculator'>Calculator</Link>     
                </Item>

                <Item key="Projects">        
                    <Link to='/projects'>Projects</Link>     
                </Item> 

                <Item key="ContactUs">
                    <Link to='/contactUs'>Contact Us</Link>
                </Item>                 
            </Menu>

            <Menu theme="light" mode="horizontal" className="rightStyle">
                <Link to='/register'>
                    <Button type="link"  style={{paddingRight: 30}}>Need an Account?</Button>
                </Link>
                <Link to='/login'>
                    <Button className="loginButtonNav">Login</Button>   
                </Link>  
            </Menu>           
                   
        </div>
    );
}

export default UnregisteredNav;