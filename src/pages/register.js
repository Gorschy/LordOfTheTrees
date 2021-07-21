import { Form, Input, Button, Checkbox, Card } from 'antd';

/* TODO:
    - style according to style guide
    - potentially captcha to stop bots
    - deal with password hashing/security etc
    
*/

const register = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Card title="Sign Up">

                <Form
                    name="register"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    scrollToFirstError
                >
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true, message: 'Please enter your First Name!' }]}
                    >
                        <Input placeholder="Enter your First Name" />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[{ required: true, message: 'Please enter your Last Name!' }]}
                    >
                        <Input placeholder="Enter your Last Name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { 
                                required: true, message: 'Please enter your Email Address!' 
                            },
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="Enter your Email" />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{ required: true, message: 'Please enter your Phone Number!' }]}
                    >
                        <Input placeholder="Enter your Phone Number" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter a Password!' }]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Enter a Password" />
                    </Form.Item>

                    <Form.Item
                        label="Reconfirm Password"
                        name="reconfirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { 
                                required: true, 
                                message: 'Please reconfirm Password!' 
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Reconfirm your Password" />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Please read and agree to the terms of service!')),
                        },
                        ]}
                    >
                        <Checkbox>
                            I Agree (<a href="https://lordofthetrees.org/">Terms & Conditions</a>)
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Account
                        </Button>
                    </Form.Item>
                </Form>
            </Card>                
        </div>
    );
}

export default register;