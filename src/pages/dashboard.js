import { Card, Col, Row } from 'antd';
import './dashboard.css';
import DashIcon1 from '../assets/DashIcon1.png';
import DashIcon2 from '../assets/DashIcon2.png';
import DashIcon3 from '../assets/DashIcon3.png';
import DashImg1 from '../assets/DashImg1.png';

const dashboard = () => { return(
    <div>
        <Row justify="space-around" gutter={24}>
        <Col span={8}> <Card className="CardClass" hoverable> 
            <div className="CardHeader">Account Info</div> <br/>
            <img className="CardImage" src={DashIcon1} alt="Account" /> <br/>
        </Card> </Col>
        <Col span={8}> <Card className="CardClass" hoverable> 
            <div className="CardHeader">Carbon Reports</div> <br/>
            <img className="CardImage" src={DashIcon2} alt="Carbon Report" /> <br/>
        </Card> </Col>
        <Col span={8}> <Card className="CardClass" hoverable> 
            <div className="CardHeader">Projects</div> <br/>
            <img className="CardImage" src={DashIcon3} alt="Projects" /> <br/>
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