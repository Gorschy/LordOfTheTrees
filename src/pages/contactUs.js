import React from 'react';
import { Form, Input, Button,Row, Col,Select, Checkbox,Card } from 'antd';
import image1 from '../assets/Nature1.png'
import './contactUs.css';
const { TextArea } = Input;
const contactUs = () => {
    return (
        <div>    
            <Row>
                <Col span={10}>
                    <Card title="Contact Details" bordered={true} style={{ width: 700 }}>
                    <p>Our Email Address: contact_email@lordofTrees.com.au</p>
                    <p> Businesss Phone Line: #0474690899</p>
                    </Card>  
                    <img className = "image1" src={image1} alt="asset"/>             
                </Col>
                <Col span={7}>              
                    <Card title="Submit Support Ticket" bordered={false} style={{ width: 700 }}>
                        <form>
                            <Form.Item name="input" label="Email" rules={[{ required: true }]}>
                            <Input placeholder="Enter Your Email"/>
                            </Form.Item>
                        </form>  
                        <form>
                            <Form.Item name="input" label="Name" rules={[{ required: true }]}>
                            <Input placeholder="Enter Your Name"/>
                            </Form.Item>
                        </form>     
                        <TextArea rows={8} />
                        <Button className="submitButton">Submit</Button>   
                    </Card>
                </Col>
             </Row>
        </div>
    );
}

export default contactUs;