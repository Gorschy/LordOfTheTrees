import { Card, Col, Row, Form, Input, Button, Divider, Select} from 'antd';
import "./account.css";
const account = () => { 
    //const { Option } = Select;

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

    
    <div>

        <Row justify="space-around" >
        <Card class='CardClass' title="Account Information" headStyle={{color: '#A3C586',
            fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '34px', lineHeight: '34px',
            textAlign: 'center', verticalAlign: 'Top'}} style={{width:'40%'}}>
            
                <Divider orientation="left">Identification</Divider>
                
                <Form
                name="accountForm"
                layout="vertical"
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item className="inputField"
                            label="First Name" name="fName"
                            rules={[{ required: false, message: 'Please input your first name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item className="inputFieldRight"
                            label="Last Name" name="lName"
                            rules={[{ required: false, message: 'Please input your last name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item className="inputField"
                            label="Email" name="email"
                            rules={[{ type: 'email', message: 'The input is not a valid Email!', },
                                { required: false, message: 'Please input your Email!', }, ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item className="inputFieldRight"
                            label="Phone Number" name="phoneNumber"
                            rules={[{ required: false, message: 'Please input your phone number!' }]}
                        >
                            <Input /*addonBefore={prefixSelector} style={{ width: '100%' }}*//>
                        </Form.Item>
                    </Col>
                </Row>

                <Divider orientation="left">Password</Divider>

                <Form.Item className="inputField"
                    label="Old Password"
                    name="oldPW"
                    rules={[{ required: false, message: 'Please input your old password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className="inputField"
                    label="New Password"
                    name="newPW"
                    rules={[{ required: false, message: 'Please input your new password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item className="inputField"
                    label="Confirm New Password"
                    name="newPWConfirm"
                    rules={[{ required: false, message: 'Please confirm your new password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Row justify="space-around" style={{width:"100%"}}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{backgroundColor:"#5B7444"}}>
                        Update Account
                        </Button>
                    </Form.Item>
                </Row>
                </Form>
        </Card></Row>

    </div>
); }

export default account