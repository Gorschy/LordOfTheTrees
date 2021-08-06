import { Card, Col, Row } from 'antd';
import './dashboard.css';
import DashIcon1 from '../assets/DashIcon1.png';
import DashIcon2 from '../assets/DashIcon2.png';
import DashIcon3 from '../assets/DashIcon3.png';
import DashImg1 from '../assets/DashImg1.png';

const dashboard = () => { return(
    <div>
        <Row justify="space-around" gutter={24}>
        <Col span={8}> <Card title="Account Info" className="CardClass" hoverable headStyle={{color: '#A3C586',
            fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '34px', lineHeight: '34px',
            textAlign: 'center', verticalAlign: 'Top'}} > 
            <Row justify="space-around" gutter={24}>
                <img className="CardImage" src={DashIcon1} alt="Account" /> <br/>
            </Row>
            
        </Card> </Col>
        <Col span={8}> <Card title="Carbon Reports" className="CardClass" hoverable headStyle={{color: '#A3C586',
            fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '34px', lineHeight: '34px',
            textAlign: 'center', verticalAlign: 'Top'}} > 
            <Row justify="space-around" gutter={24}>
            <img className="CardImage" src={DashIcon2} alt="Carbon Report" /> <br/>
            </Row>
            
        </Card> </Col>
        <Col span={8}> <Card title="Projects" className="CardClass" hoverable headStyle={{color: '#A3C586',
            fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '34px', lineHeight: '34px',
            textAlign: 'center', verticalAlign: 'Top'}} > 
            <Row justify="space-around" gutter={24}>
                <img className="CardImage" src={DashIcon3} alt="Projects" /> <br/>
            </Row>
        </Card> </Col>
        </Row>

        <br/>

        <Row justify="space-around">
            <Card> <img className="sprayImage" src={DashImg1} alt="Spray" style={{maxWidth: "100%", minWidth:"10%"}}/> </Card>
        </Row>
        


    </div>
);}
export default dashboard;

// TO DO: FIX IMAGE WRAPPING