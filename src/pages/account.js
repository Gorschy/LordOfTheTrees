import { useEffect } from 'react';
import { Card, Col, Row, Form, Input, Button, Divider, Select} from 'antd';
import { Auth } from 'aws-amplify';
import "./account.css";
import "../style.css";
const Account = () => { 
    //const { Option } = Select;
    
    useEffect(() => {
        displayUserDetails();
    }, []);

    const displayUserDetails = async () => {
        //Capture current authed user
        let user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;

        //Display User Details
        //First Name
        if(attributes.given_name !== undefined ){
            var fNameInput = document.getElementById("firstName");
            fNameInput.value = attributes.given_name;
        }
        //Last Name
        if(attributes.family_name !== undefined ){
        var lNameInput = document.getElementById("lastName");
        lNameInput.value = attributes.family_name;
        }
        //Email
        if(attributes.email !== undefined ){
        var emailInput = document.getElementById("email");
        emailInput.value = attributes.email;
        }
        //Phone Number
        if(attributes.phone_number !== undefined ){
        var phoneNumberInput = document.getElementById("phoneNumber");
        phoneNumberInput.value = attributes.phone_number;
        }
    };


    const updateUserDetails = async () => {
        
        /*let user = await Auth.currentAuthenticatedUser();
        const { attributes } = user;

        
        var fNameInput = document.getElementById("firstName");
        var lNameInput = document.getElementById("lastName");
        var emailInput = document.getElementById("email");
        var phoneNumberInput = document.getElementById("phoneNumber");

        await Auth.updateUserAttributes(user, {
            'email': emailInput,
            'given_name': fNameInput,
            'family_name': lNameInput,
            'phone_number': phoneNumberInput
        });*/
    };
   
    

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
/*
    const prefixSelector = (
        <Form.Item name="phonePrefix" noStyle>
          <Select style={{ width: 70 }} defaultValue="+1">
            <Option value="1">+1</Option>
            <Option value="7">+7</Option>
            <Option value="20">+20</Option>
            <Option value="27">+27</Option>
            <Option value="30">+30</Option>
            <Option value="31">+31</Option>
            <Option value="32">+32</Option>
            <Option value="33">+33</Option>
            <Option value="34">+34</Option>
            <Option value="36">+36</Option>
            <Option value="39">+39</Option>
            <Option value="40">+40</Option>
            <Option value="41">+41</Option>
            <Option value="43">+43</Option>
            <Option value="44">+44</Option>
            <Option value="45">+45</Option>
            <Option value="46">+46</Option>
            <Option value="47">+47</Option>
            <Option value="48">+48</Option>
            <Option value="49">+49</Option>
            <Option value="51">+51</Option>
            <Option value="52">+52</Option>
            <Option value="53">+53</Option>
            <Option value="54">+54</Option>
            <Option value="55">+55</Option>
            <Option value="56">+56</Option>
            <Option value="57">+57</Option>
            <Option value="58">+58</Option>
            <Option value="60">+60</Option>
            <Option value="61">+61</Option>
            <Option value="62">+62</Option>
            <Option value="63">+63</Option>
            <Option value="64">+64</Option>
            <Option value="65">+65</Option>
            <Option value="66">+66</Option>
            <Option value="81">+81</Option>
            <Option value="82">+82</Option>
            <Option value="84">+84</Option>
            <Option value="86">+86</Option>
            <Option value="90">+90</Option>
            <Option value="91">+91</Option>
            <Option value="92">+92</Option>
            <Option value="93">+93</Option>
            <Option value="94">+94</Option>
            <Option value="95">+95</Option>
            <Option value="98">+98</Option>
          </Select>
         
        </Form.Item>
      );
     // TODO: FINISH ADDING PHONE PREFIXES

     */
    return(

        <Row justify="space-around" >
        <Card class='CardClass' title={<h1>Account Information</h1>} style={{width:'40%'}}>
                
                <Form
                name="accountForm"
                layout="vertical"
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >

                <Row gutter={0}>
                    <Col span={12}>
                        <Form.Item
                            label={<h3 className="inputHeaderSpacing">First Name</h3>} name="fName"
                            rules={[{ required: false, message: 'Please input your first name!' }]}
                        >
                            <input className="inputFieldShort" id ='firstName' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={<h3 className="inputHeaderSpacing">Last Name</h3>} name="lName"
                            rules={[{ required: false, message: 'Please input your last name!' }]}
                        >
                            <input className="inputFieldShort" id='lastName' />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={0}>
                    <Col span={12}>
                        <Form.Item
                            label={<h3 className="inputHeaderSpacing">Email</h3>} name="email"
                            rules={[{ type: 'email', message: 'The input is not a valid Email!', },
                                { required: false, message: 'Please input your Email!', }, ]}
                        >
                            <input className="inputFieldShort" id="email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item 
                            label={<h3 className="inputHeaderSpacing">Phone Number</h3>} name="phoneNumber"
                            rules={[{ required: false, message: 'Please input your phone number!' }]}
                        >
                            <input className="inputFieldShort" id='phoneNumber' /*addonBefore={prefixSelector} style={{ width: '100%' }}*//>
                        </Form.Item>
                    </Col>
                </Row>

                <Divider orientation="left"><h2>Change Password</h2></Divider>

                <Form.Item className="space"
                    label={<h3 className="inputHeaderSpacing">Old Password</h3>}
                    name="oldPW"
                    rules={[{ required: false, message: 'Please input your old password!' }]}
                >
                    <Input.Password className="inputFieldLong"/>
                </Form.Item>

                <Form.Item className="space"
                    label={<h3 className="inputHeaderSpacing">New Password</h3>}
                    name="newPW"
                    rules={[{ required: false, message: 'Please input your new password!' }]}
                >
                    <Input.Password className="inputFieldLong"/>
                </Form.Item>

                <Form.Item className="space"
                    label={<h3 className="inputHeaderSpacing">Confirm New Password</h3>}
                    name="newPWConfirm"
                    rules={[{ required: false, message: 'Please confirm your new password!' }]}
                >
                    <Input.Password className="inputFieldLong"/>
                </Form.Item>
             
                    <Form.Item>
                        <Button type="primary" htmlType="submit" id="pWSubmitButton">Update Account</Button>
                    </Form.Item>
                </Form>
        </Card></Row>
); }

export default Account