import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './dashboard.css';
import '../style.css';
import DashIcon1 from '../assets/DashIcon1.png';
import DashIcon2 from '../assets/DashIcon2.png';
import DashIcon3 from '../assets/DashIcon3.png';
import DashImg1 from '../assets/DashImg1.png';

const dashboard = () => { return(
    <div>
        
        <Row justify="space-around" gutter={24}>
        
        <Col span={8}> <Link to="/account">
        <Card title={<div className="cardHeader">Account</div>} className="CardClass" hoverable > 
            <Row justify="space-around" gutter={24}>
                <img className="CardImage" src={DashIcon1} alt="Account" /> <br/>
            </Row>
        </Card> </Link> </Col>
        
        
        <Col span={8}> <Link to="/calculator">
        <Card title={<div className="cardHeader">Carbon Reports</div>} className="CardClass" hoverable > 
            <Row justify="space-around" gutter={24}> <img className="CardImage" src={DashIcon2} alt="Carbon Report" /> <br/> </Row>  
        </Card> </Link> </Col> 
        
        <Col span={8}> <Link to="/projects">
        <Card title={<div className="cardHeader">Projects</div>} className="CardClass" hoverable > 
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
);}
export default dashboard;

// TO DO: FIX IMAGE WRAPPING