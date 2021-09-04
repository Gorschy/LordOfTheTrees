import React, { useContext } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './dashboard.css';
import '../style.css';
import DashIcon1 from '../assets/DashIcon1.png';
import DashIcon2 from '../assets/DashIcon2.png';
import DashIcon3 from '../assets/DashIcon3.png';
import DashImg1 from '../assets/DashImg1.png';
import { UserContext } from './UserContext';
import { Redirect } from 'react-router'

const Dashboard = () => { 
    
    const {loggedIn, setLoggedIn} = useContext(UserContext);

    return(
    <div> 
    { loggedIn ? (
        <div>
        <Row justify="space-around" gutter={24}>
        
        <Col span={8}> <Link to="/account">
        <Card title={<h1>Account</h1>} className="CardClass" hoverable > 
            <Row justify="space-around" gutter={24}>
                <img className="CardImage" src={DashIcon1} alt="Account" /> <br/>
            </Row>
        </Card> </Link> </Col>
        
        <Col span={8}> <Link to="/calculator">
        <Card title={<h1>Carbon Reports</h1>} className="CardClass" hoverable > 
            <Row justify="space-around" gutter={24}> <img className="CardImage" src={DashIcon2} alt="Carbon Report" /> <br/> </Row>  
        </Card> </Link> </Col> 
        
        <Col span={8}> <Link to="/projects">
        <Card title={<h1>Projects</h1>} className="CardClass" hoverable > 
            <Row justify="space-around" gutter={24}>
                <img className="CardImage" src={DashIcon3} alt="Projects" /> <br/>
            </Row>
        </Card> </Link> </Col>
        
        </Row>
        <br/>
        <Row justify="space-around">
            <Card> <img className="sprayImage" src={DashImg1} alt="Spray" style={{maxWidth: "100%", minWidth:"10%"}}/> </Card>
        </Row>
        </div>
     ) : (<Redirect to="/home"/>) }        
    </div>
);}
export default Dashboard;

// TO DO: FIX IMAGE WRAPPING