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

import { UserContext } from './pages/UserContext';
import Navbar from './pages/Navbar';

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

    //Not sure if this function is really necessary
    const onSignIn = () => {
        setLoggedIn(true);
    };



    return (
        <div>
            <Router>
                <Layout className="layout">
                    <Header className="site-layout-header">
                        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
                            <Navbar />
                        </UserContext.Provider>
                    </Header>
                    
                    <Content className="contentContainer">
                        <div>
                           
                            
                            <Switch>
                                <UserContext.Provider value={{ loggedIn, setLoggedIn }}>    
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
                                </UserContext.Provider>
                            </Switch>
                          
                                
                        </div>
                    </Content>
                </Layout>
            </Router>    

        </div>
    );
}

export default App;
