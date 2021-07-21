import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar/Navbar';
import { Layout } from 'antd';

import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import home from './pages/home';
import calculator from './pages/calculator';
import contactUs from './pages/contactUs';
import register from './pages/register';
import login from './pages/login';




const { Header, Content } = Layout;

Amplify.configure(awsconfig);

function App() {
    return (
        <div>
            <Router>
                <Layout className="layout">
                    
                    <Header className="site-layout-header">
                        <Navbar />
                    </Header>
                    
                    <Content style={{ padding: '50px 50px' }}>
                        <div>
                            <AmplifySignOut />
                            
                            <Switch>
                                <Route exact path="/home" component={home} />
                                <Route exact path="/">
                                    <Redirect to="/home" />
                                </Route>
                                <Route exact path="/calculator" component={calculator} />
                                <Route exact path="/contactUs" component={contactUs} />
                                <Route exact path="/register" component={register} />
                                <Route exact path="/login" component={login} />
                            </Switch>
                          
                                
                        </div>
                    </Content>
                </Layout>
            </Router>    

        </div>
    );
}

export default withAuthenticator(App);
