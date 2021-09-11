import { Card, Row, Image } from 'antd';
import './home.css';
import '../style.css';
import homeImage1 from '../assets/homeImage1.jpg';
import homeImage2 from '../assets/homeImage2.png';
import homeImage3 from '../assets/homeImage3.png';


const home = () => {

    return ( 
        <div>

            <Row justify="space-around">
               
                <Card className="homeOurTeamCard" title={<h1>Our Team</h1>}>
                <div id="ourTeamText" className="standardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed est mi. Curabitur laoreet venenatis lorem, vel interdum felis condimentum vel. Suspendisse et interdum mi. Praesent a purus euismod ipsum gravida dapibus. Vivamus a gravida mauris, nec posuere augue. Phasellus quis sapien tortor. In sapien velit, viverra in congue vitae, rhoncus a erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sit amet nisi sed dolor congue commodo ut nec ligula. Aenean mattis sagittis facilisis. Phasellus gravida arcu id ex luctus luctus. Integer mauris neque, lacinia eget finibus at, sodales ut lectus. Sed aliquet porttitor dui, id molestie sapien dignissim vitae. Nulla diam nunc, maximus nec augue tempus, aliquet euismod nisl. "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </div>
                </Card>
            
                <div id="img1Wrapper"><Image className="homeImage" id = "homeImage3" src={homeImage3} alt="asset"/></div>
                

                
            
        
                
               
            </Row>

            <Row  justify="space-around">
                {/* <Image className="homeImage" id = "homeImage1" src={homeImage1} alt="asset"/>*/}
     
                <div id="img2Wrapper"><Image className="homeImage" id = "homeImage2" src={homeImage2} alt="asset"/></div>


                <Card className="homeFAQCard" title={<h1>FAQ</h1>}>
                <div id="faqText" className="standardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum aliquet mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur metus arcu, dapibus in metus ac, efficitur elementum purus. Nulla elementum, nibh et ultricies pellentesque, urna dolor imperdiet felis, et consequat sem lorem et magna. Praesent at lacinia eros, eu volutpat urna. Nam consequat libero eros, eu porta ante pellentesque sollicitudin. Cras tempor, augue id varius vehicula, felis massa mollis mauris, id mattis eros tortor viverra enim. Donec fermentum nec elit nec placerat. Sed et nisl dui.
                </div>
                </Card>
           
            </Row>


        </div>
    );
}
export default home;



