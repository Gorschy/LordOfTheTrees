import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import './components/Navbar/Navbar.css';
import { Layout } from 'antd';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import home from './pages/home';
import calculator from './pages/calculator';
import contactUs from './pages/contactUs';
import SignIn from './pages/login';
import dashboard from './pages/dashboard';
import account from './pages/account';
import { Button, Menu } from 'antd';
import Register from './pages/register';
import Projects from './pages/projects';
import ConfirmSignUp from './pages/confirmSignUp';
import logo from './assets/RPPLogoPlaceholder.png';

const { Header, Content } = Layout;
const { Item } = Menu;

Amplify.configure(awsconfig);

function App() {

    const[loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        assessLoggedInState();
    }, []);

    const assessLoggedInState = () => {
        Auth.currentAuthenticatedUser().then(sess => {
            console.log('logged in');
            setLoggedIn(true);
        }).catch(() => {
            console.log('not logged in');
            setLoggedIn(false);
        });
    };

    const signOut = async () => {
        try {
            await Auth.signOut();
            setLoggedIn(false);
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };
    //Not sure if this function is really necessary
    const onSignIn = () => {
        setLoggedIn(true);
    };



    return (
        <div>
            <Router>
                <Layout className="layout">
                    
                    <Header className="site-layout-header">
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
                    </Header>
                    
                    <Content className="contentContainer">
                        <div>
                           
                            
                            <Switch>
                                <Route exact path="/home" component={home} />
                                <Route exact path="/">
                                    <Redirect to="/home" />
                                </Route>
                                <Route exact path="/calculator" component={calculator} />
                                <Route exact path="/contactUs" component={contactUs} />
                                <Route exact path="/register">
                                    <Register /> 
                                </Route>
                                <Route exact path="/confirmSignUp">
                                    <ConfirmSignUp />
                                </Route>
                                <Route exact path="/login"> 
                                    <SignIn onSignin={onSignIn} />     
                                </Route>
                                <Route exact path="/dashboard" component={dashboard} />
                                <Route exact path="/account" component={account} />
                                <Route exact path="/projects" component={Projects} />
                            </Switch>
                          
                                
                        </div>
                    </Content>
                </Layout>
            </Router>    

        </div>
    );
}

export default App;
