import { Form, Input, Button, Checkbox, Card, Row, Col } from 'antd';
import './home.css';
import image1 from '../assets/Nature1.png'
import image2 from '../assets/Nature2.png'

const home = () => {

    return ( 
        <div>

            <Row>
                <Col span={10}>
                    <Card title="Our Team">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed est mi. Curabitur laoreet venenatis lorem, vel interdum felis condimentum vel. Suspendisse et interdum mi. Praesent a purus euismod ipsum gravida dapibus. Vivamus a gravida mauris, nec posuere augue. Phasellus quis sapien tortor. In sapien velit, viverra in congue vitae, rhoncus a erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sit amet nisi sed dolor congue commodo ut nec ligula. Aenean mattis sagittis facilisis. Phasellus gravida arcu id ex luctus luctus. Integer mauris neque, lacinia eget finibus at, sodales ut lectus. Sed aliquet porttitor dui, id molestie sapien dignissim vitae. Nulla diam nunc, maximus nec augue tempus, aliquet euismod nisl.</Card>
                </Col>
                <Col span={7}>
                    <img className = "image1" src={image1}/>
                </Col>
                <Col span={6}>
                    <img className = "image2" src={image2}/>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <img className = "image3" src={image1}/>
                </Col>
                <Col span={13}>
                    <Card title="FAQ">FAQ Temp</Card>
                </Col>
            </Row>


        </div>
    );
}
export default home;


 

