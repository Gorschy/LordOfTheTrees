import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
const SignIn = ({ onSignin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const signIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
            history.push('/');
            onSignin();

        } catch (error) {
            console.log('error singing in', error);
        }
    };


    return (  
        <div id="test">
            <Card className="loginCard" title="Login" bordered={false} style={{ width: 300 }}>
                <p>Username</p>
                <Input className="loginField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <p>Password</p>
                <Input className="loginField"
                    id="password"
                    label="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                
                <Button className="loginButton" id="signinButton" onClick={signIn} type="primary">
                    Sign In                  
                </Button>
            </Card> 
        </div>
    );
}

export default SignIn;





    
    
    

