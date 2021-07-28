import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Link, useHistory } from 'react-router-dom';

const Signin = ({ onSignin }) => {

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
            <Input 
                id="username"
                label="Username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <Input 
                id="password"
                label="Password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <Button id="signinButton" onClick={signIn} type="primary">
                Sign In                  
            </Button> 
        </div>
    );
}

export default Signin;