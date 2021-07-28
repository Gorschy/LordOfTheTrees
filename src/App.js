import React, { useEffect, useState } from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar/Navbar';
import { Layout } from 'antd';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import home from './pages/home';
import calculator from './pages/calculator';
import contactUs from './pages/contactUs';
import register from './pages/register';
import SignIn from './pages/login';
import dashboard from './pages/dashboard';
import account from './pages/account';
import { Button } from 'antd';



const { Header, Content } = Layout;

Amplify.configure(awsconfig);

function App() {

    const[loggedIn, setLoggedIn] = useState(false);

    const assessLoggedInState = () => {
        Auth.currentAuthenticatedUser().then(sess => {
            console.log('logged in');
            setLoggedIn(true);
        }).catch(() => {
            console.log('not logged in');
            setLoggedIn('false');
        });
    };

    useEffect(() => {
        assessLoggedInState();
    }, []);

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
            <Router>
                <Layout className="layout">
                    
                    <Header className="site-layout-header">
                        <Navbar />
                    </Header>
                    
                    <Content className="contentContainer">
                        <div>
                           { loggedIn ? (
                                <Button onClick={signOut} type="primary">
                                    Sign Out
                                    
                                </Button> 
                            ) : ( 
                                <Link to="/login">    
                                    <Button type="primary">
                                        Log In
                                    </Button>
                                </Link>
                            )}
                            
                            <Switch>
                                <Route exact path="/home" component={home} />
                                <Route exact path="/">
                                    <Redirect to="/home" />
                                </Route>
                                <Route exact path="/calculator" component={calculator} />
                                <Route exact path="/contactUs" component={contactUs} />
                                <Route exact path="/register" component={register} />
                                <Route exact path="/login"> 
                                    <SignIn onSignin={assessLoggedInState} />     
                                </Route>
                                <Route exact path="/dashboard" component={dashboard} />
                                <Route exact path="/account" component={account} />
                            </Switch>
                          
                                
                        </div>
                    </Content>
                </Layout>
            </Router>    

        </div>
    );
}

export default App;
