import emailjs from 'emailjs-com';
import React from 'react';
import { Form, Input, Button, Row, Col, Select, Checkbox, Card, Menu, Dropdown, Space, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import image1 from '../assets/Nature1.png'
import './contactUs.css';
export default function contactUs() {

    function sendEmail(e) {
        e.preventDefault();

        /* We get 200 emails a month with the free tier DON"T SPAM THE SEND MESSAGE BOX
        Fields ServiceID, templateID, e.target (refers to what the user is submiting through the form), UserID (this is the user api key) >> https://www.emailjs.com/  */

        emailjs.sendForm('service_8vz2gxx', 'template_abxoegl', e.target, 'user_IiRHYUwqWVSGke3woZlnQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    const { Option } = Select;

    /* Dropdown value is not currently being collected properly, its not showing up on the email. The input is getting reset with the onclick function as it should */
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div>

            <Row>
                <Col span={10}>
                    <Card title="Contact Details" bordered={true} style={{ width: 700 }}>
                        <p>Our Email Address: contact_email@lordofTrees.com.au</p>
                        <p> Businesss Phone Line: #0474690899</p>
                    </Card>
                    <img className="image1" src={image1} alt="asset" />
                </Col>
                <Col span={7}>
                    <Card title="Submit Support Ticket" bordered={false} style={{ width: 700 }}>
                        <form onSubmit={sendEmail}>
                            <div className>
                                <div>
                                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" />
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>

                                        <input type="text" className="form-control" placeholder="Enter Your Name" name="name" />
                                    </Form.Item>
                                </div>
                                <div>
                                    <Select defaultValue="option1" style={{ width: 200 }} onChange={handleChange}>
                                        <option value="option1" name="subject" >General Enquiries</option>
                                        <option value="option2" name="subject" >Technical Support</option>
                                        <option value="option3" name="subject" >Feedback</option>
                                    </Select>
                                </div>
                            </div>
                            <textarea className="form-control" id="" cols="80" rows="8" placeholder="Enter your text here" name="message" />
                            <div className="col-8 pt-3 mc audto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>

                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
