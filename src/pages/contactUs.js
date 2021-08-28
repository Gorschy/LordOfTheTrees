import emailjs from 'emailjs-com';
import React from 'react';
import '../style.css';
import { Form, Input, Row, Col, Select, Card, Image, Divider} from 'antd';
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
    }



    /* Dropdown value is not currently being collected properly, its not showing up on the email. The input is getting reset with the onclick function as it should */
    function handleChange(value) {
        console.log(`selected ${value}`);
    }


    return (
        <div>

            <Row justify="space-around" gutter={24}>
                <Col span={8}>

                    <Card id="contactDetailsCard" title={<div className="cardHeader">Contact Details</div>} bordered={true}>
                        <div className="headerText">Our Email Address:</div>
                        <div className="standardText">contact_email@lordofTrees.com.au</div>
                        <br/>
                        <div className="headerText">Businesss Phone Line:</div>
                        <div className="standardText">0474690899</div>

                        <Divider />
                        <div id="sprayImageHolder"><Image id="sprayImage" src={contactDetailsImage} alt="Spray Image Asset"/></div>
                    </Card>
                    


                </Col>
                <Col span={16}>
                    <Card id="submitTicketCard" title={<div className="cardHeader">Submit Support Ticket</div>} bordered={false}>
                        <form onSubmit={sendEmail}>
                            <div id="submitSupportTicket">
                                <Row justify="space-around" gutter={24}>
                                    <Col span={12}>
                                    <label for="email">{<div className="headerText">Email</div>}</label>
                                        <Form.Item name="email" rules={[{ required: true }]}>
                                            <Input type="email" id="emailInputBox" className="form-control" placeholder="Enter Your Email" name="email" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <label for="name">{<div className="headerText">Name</div>}</label>
                                        <Form.Item name="name" rules={[{ required: true }]}>
                                            <Input type="text" id="nameInputBox" className="form-control" placeholder="Enter Your Name" name="name" />
                                        </Form.Item>
                                    </Col>
                                    </Row>
                                        <Select id="reasonSelectBox" defaultValue="option5" onChange={handleChange}>
                                            <option value="option5" disabled name="subject" >{<div className="standardText">Select Ticket Reason</div>}</option>
                                            <option value="option1" name="subject" >{<div className="standardText">General Enquiries</div>}</option>
                                            <option value="option2" name="subject" >{<div className="standardText">Technical Support</div>}</option>
                                            <option value="option3" name="subject" >{<div className="standardText">Feedback</div>}</option>
                                        </Select>
                                
                                <div id="contactUsTextArea">
                                    <textarea id="textEntryBody" className="testform-control" cols="120" rows="12" placeholder="Enter your text here" name="message"  />
                                </div>
                                <div id="contactUsSubmitButton">
                                    <Input type="submit" id="submitButton" className="btn btn-info" value="Send Message"></Input>
                                </div>
                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
