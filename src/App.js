import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar/Navbar';
import { Layout } from 'antd';

const { Header, Content } = Layout;

Amplify.configure(awsconfig);

function App() {
    return (
        <div>
            
            <Layout className="layout">
                
                <Header  className="site-layout-header">
                    <Navbar />
                </Header>
                
                <Content style={{ padding: '50px 50px' }}>
                    <div className="site-layout-content">
                        <AmplifySignOut />
                    </div>
                </Content>
            </Layout>    

        </div>
    );
}

export default withAuthenticator(App);
