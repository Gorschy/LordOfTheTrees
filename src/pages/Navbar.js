import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import './Navbar.css';
import logo from '../assets/RPPLogoPlaceholder.png';
import Amplify, { Auth } from 'aws-amplify';
const { Item } = Menu;

/* TODO:
    - add light dark mode functionality
    - route page tabs
    - style according to style guide
    - remove hover border
*/

const Navbar = () => {

        const {loggedIn, setLoggedIn} = useContext(UserContext);

        //migrate to navbar
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
                            <Link to='/register'>
                                <Button type="link"  style={{paddingRight: 30}}>Need an Account?</Button>
                            </Link>
                            
                            
                            
                            { loggedIn ? (
                                    <Link to="/">  
                                        <Button onClick={signOut} className="loginButtonNav" type="primary">
                                            Sign Out
                                        </Button>
                                    </Link> 
                                ) : ( 
                                    <Link to="/login">    
                                        <Button className="loginButtonNav" type="primary">
                                            Log In
                                        </Button>
                                    </Link>
                                )}
                        </Menu>     
        </div>
    );
}

export default Navbar;