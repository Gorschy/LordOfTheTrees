import { Card, Row, Col } from 'antd';
import './home.css';
import homeImage1 from '../assets/homeImage1.jpg';
import homeImage2 from '../assets/homeImage2.png';
import homeImage3 from '../assets/homeImage3.png';

const home = () => {

    return ( 
        <div>

            <Row>
                <Col span={10}>
                    <Card className="homeOurTeamCard" title="Our Team">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed est mi. Curabitur laoreet venenatis lorem, vel interdum felis condimentum vel. Suspendisse et interdum mi. Praesent a purus euismod ipsum gravida dapibus. Vivamus a gravida mauris, nec posuere augue. Phasellus quis sapien tortor. In sapien velit, viverra in congue vitae, rhoncus a erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sit amet nisi sed dolor congue commodo ut nec ligula. Aenean mattis sagittis facilisis. Phasellus gravida arcu id ex luctus luctus. Integer mauris neque, lacinia eget finibus at, sodales ut lectus. Sed aliquet porttitor dui, id molestie sapien dignissim vitae. Nulla diam nunc, maximus nec augue tempus, aliquet euismod nisl. "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</Card>
                </Col>
                <Col span={5}>
                    <img className = "image1" src={homeImage1} alt="asset"/>
                </Col>
                <Col span={6}>
                    <img className = "image2" src={homeImage2} alt="asset"/>
                </Col>
            </Row>

            <Row>
                <Col span={10}>
                <img className = "image3" src={homeImage3} alt="asset"/>
                </Col>
                <Col span={12}>
                    <Card title="FAQ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum aliquet mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur metus arcu, dapibus in metus ac, efficitur elementum purus. Nulla elementum, nibh et ultricies pellentesque, urna dolor imperdiet felis, et consequat sem lorem et magna. Praesent at lacinia eros, eu volutpat urna. Nam consequat libero eros, eu porta ante pellentesque sollicitudin. Cras tempor, augue id varius vehicula, felis massa mollis mauris, id mattis eros tortor viverra enim. Donec fermentum nec elit nec placerat. Sed et nisl dui.</Card>
                </Col>
            </Row>


        </div>
    );
}
export default home;



