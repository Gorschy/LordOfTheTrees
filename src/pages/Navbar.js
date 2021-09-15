import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import './Navbar.css';
import '../style.css';
import logo from '../assets/LOTT rd.png';
import { Auth } from 'aws-amplify';
const { Item } = Menu;

/* TODO:
    - add light dark mode functionality
    - route page tabs
    - style according to style guide
    - remove hover border
*/

const Navbar = () => {

        const {loggedIn, setLoggedIn} = useContext(UserContext);
        
        const signOut = async () => {
            try {
                await Auth.signOut();
                setLoggedIn(false);
            } catch (error) {
                console.log('error signing out: ', error);
            }
        };

    return (
        <div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["Home"]} className="leftStyle">
                            <Item style={{borderBottom:'none'}}>
                                <Link to='/home'><img className="logo" src={logo} alt="Logo"/></Link>
                            </Item>
                            
                            <Item key="Home">
                                <Link to='/home'>Home</Link>
                            </Item>

                            {loggedIn ? (
                                <Item key="Dashboard">        
                                    <Link to='/dashboard'>Dashboard</Link>     
                                </Item>
                            ) : null }   
                     

                            <Item key="Calculator">        
                                <Link to='/calculator'>Calculator</Link>     
                            </Item>

                            {loggedIn ? (<Item key="Projects">        
                                <Link to='/projects'>Projects</Link>     
                            </Item>) : null }

                                                
                            <Item key="ContactUs">
                                <Link to='/contactUs'>Contact Us</Link>
                            </Item>                 
                        </Menu>

                        <Menu theme="light" mode="horizontal" className="rightStyle">

                            { loggedIn ? (
                                    <Link to="/">  
                                        <Button onClick={signOut} id="navButton" className="loginButtonNav" type="primary">
                                            Sign out
                                        </Button>
                                    </Link> 
                                ) : ( 
                                    <div>
                                        <Link to='/register'>
                                            <Button type="link" style={{paddingRight: 30}}><div className="standardTextLink">Need an Account?</div></Button>
                                        </Link>
                                        <Link to="/login">    
                                            <Button id="navButton" className="loginButtonNav" type="primary">
                                                Login
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                        </Menu>     
        </div>
    );
}

export default Navbar;