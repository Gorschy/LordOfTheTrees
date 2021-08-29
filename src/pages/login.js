import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './login.css';
const SignIn = ({ onSignin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const [errors, setErrors] = useState('');


    const signIn = async () => {
        
        try {
            const user = await Auth.signIn(username, password);
            history.push('/');
            onSignin();

        } catch (error) {
        
            console.log('error singing in', error);
            setErrors(error.message);

        }
    };


    return (  
        <div>
            <Card className="loginCard" title="Login" bordered={false} style={{ width: 300 }}>
                <p className="loginLabels">Username</p>
                <Input className="loginField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                
                <p className="loginLabels">Password</p>
                <Input className="loginField"
                    type="password"
                    id="password"
                    label="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <span>{errors}</span>
                <Button className="loginButton" id="signinButton" onClick={signIn} type="primary">
                    Sign In                  
                </Button>
            </Card> 
        </div>
    );
}

export default SignIn;





    
    
    

