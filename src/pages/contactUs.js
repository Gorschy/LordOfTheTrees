import emailjs from 'emailjs-com';
import React from 'react';
import { Form, Input, Row, Col, Select, Card} from 'antd';
import contactDetailsImage from '../assets/Nature1.png'
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

        e.target.resetFields()
    }



    /* Dropdown value is not currently being collected properly, its not showing up on the email. The input is getting reset with the onclick function as it should */
    function handleChange(value) {
        console.log(`selected ${value}`);
    }


    return (
        <div>

            <Row>
                <Col span={10}>
                    <div id="contactDetailsCard" >
                    <Card className = "contactDetails" title="Contact Details" bordered={true} style={{ width: 700 }}>
                        <div id="contactDetailsText">
                            <div id="contactDetailsLeft">        
                                <p>Our Email Address: </p>
                                <p>Businesss Phone Line: </p>
                            </div>
                            <div id="contactDetailsRight"> 
                                <p> contact_email@lordofTrees.com.au</p>
                                <p> 0474690899</p>
                            </div>
                        </div>
                    </Card>
                    </div>
                    <img className="contactDetailsImage" src={contactDetailsImage} alt="asset" />
                </Col>
                <Col span={7}>
                    <Card title="Submit Support Ticket" bordered={false} style={{ width: 1000 }}>
                        <form onSubmit={sendEmail}>
                            <div id="submitSupportTicket">
                             <div className>
                                <div>
                                <div id="submitSupportTicketLeft"> 
                                <label for="email">Email</label>
                                    <Form.Item name="email" rules={[{ required: true }]}>
                                        <Input type="email" className="form-control" placeholder="Enter Your Email" name="email" />
                                    </Form.Item>
                                    </div>
                                </div>
                                <div>
                                <div id="submitSupportTicketRight"> 
                                    <label for="name">Name</label>
                                    <Form.Item name="name" rules={[{ required: true }]}>
                                        <Input type="text" className="form-control" placeholder="Enter Your Name" name="name" />
                                    </Form.Item>
                                    </div>
                                </div>
                                <div id= "submitSupportTicketSelectReason">
                                    <Select defaultValue="option5" style={{ width: 270 }} onChange={handleChange}>
                                        <option value="option5" disabled name="subject" >Select Ticket Reason</option>
                                        <option value="option1" name="subject" >General Enquiries</option>
                                        <option value="option2" name="subject" >Technical Support</option>
                                        <option value="option3" name="subject" >Feedback</option>
                                    </Select>
                                </div>
                            </div>
                            <div id="contactUsTextArea">
                            <textarea className="testform-control" cols="120" rows="12" placeholder="Enter your text here" name="message"  />
                            </div>
                            <div id="contactUsSubmitButton">
                                <Input type="submit"  className="btn btn-info" value="Send Message"></Input>
                            </div>
                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
