import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './login.css';
import '../style.css'
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
        <div>
            <Card className="loginCard" title={<div className="cardHeader">Login</div>} bordered={false} >
                <div className="headerText" id="loginLabel" >Username</div>
                <Input className="loginField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <br/> <br/>
                <div className="headerText" id="loginLabel">Password</div>
                <Input className="loginField"
                    type="password"
                    id="password"
                    label="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                
                <br/> <br/>
                <Button className="loginButton" id="signinButton" onClick={signIn} type="primary">
                    Log In      
                </Button>
            </Card> 
        </div>
    );
}

export default SignIn;





    
    
    

