import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './register.css';
const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const signUp = async () => {
        try {
            const user = await Auth.signUp(username, password);
            history.push('/confirmSignUp');

        } catch (error) {
            console.log('error singing in', error);
        }
    };

    return (  
          
        <div>
            <Card className="registerCard" title="Sign Up" bordered={false}>
                <p>Username</p>
                <Input className="registerField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <p>Password</p>
                <Input className="registerField"
                    id="password"
                    label="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button className="registerButton" id="signUpButton" onClick={signUp} type="primary">
                    Sign up                 
                </Button> 
            </Card> 
        </div>
    );
}

export default Register;
