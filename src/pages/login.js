import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Link } from 'react-router-dom';

const login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (  
          
        <div>
            <Card>
                
                <h1>Login</h1>

                <Form
                    name="login"
                    layout="vertical"
                    requiredMark={'optional'}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    scrollToFirstError
                >
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
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Enter your Password"/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                        <a href="https://lordofthetrees.org/">Forgot Password?</a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        Don't have an account? <Link to='/register'>Sign Up!</Link>
                    </Form.Item>
                </Form>
            </Card>                
        </div>
    );
}

export default login;