import './App.css';
import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Layout } from 'antd';
import { Route, Switch, Redirect} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from './pages/UserContext';
import Login from './pages/login';
import Navbar from './pages/Navbar';
import home from './pages/home';
import path from './_constants/paths';

const { Header, Content } = Layout;


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
    function onSignIn() {
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

                                <Route exact path="/calculator" component={path.calculator} />
                                <Route exact path="/contactUs" component={path.contactUs} />
                                <Route exact path="/register" component={path.register} />
                                <Route exact path="/confirmSignUp" component={path.confirmSignUp} />
                                <Route exact path="/login"> <Login onSignin={onSignIn} /> </Route>
                                <Route exact path="/forgotPassword" component={path.forgotPassword} />
                                <Route exact path="/forgotPasswordAuth" component={path.forgotPasswordAuth} />
                                <Route exact path="/dashboard" component={path.dashboard} />
                                <Route exact path="/account" component={path.account} />
                                <Route exact path="/projects" component={path.projects} />
                                <Route exact path="/solutions" component={path.solutions} />
                                                            
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
