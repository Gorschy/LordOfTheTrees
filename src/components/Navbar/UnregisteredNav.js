import { Menu, Button } from 'antd';
import './Navbar.css';
import logo from '../../assets/RPPLogoPlaceholder.png';
import PATH from '../../_constants/paths';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
                        <div>Home</div>
                    </Item>
                    
                    <Item key="Calculator">
                        <Router>
                            <Link to="../../pages/calculator.js">Calculator</Link>
                        </Router> 
                    </Item>
                                        
                    <Item key="ContactUs">
                        <div>Contact Us</div>
                    </Item>                 
            </Menu>

            <Menu theme="light" mode="horizontal"  style={ rightStyle }>
                <Button type="link" style={{paddingRight: 30, paddingTop: 8}}>Need an Account?</Button>
                <Button className="loginButton">Login</Button>     
            </Menu>           
                   
        </div>
    );
}

export default UnregisteredNav;