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
            <Card className="loginCard" title={<h1>Login</h1>} bordered={false} >
                <h2 id="loginLabel" >Email</h2>
                <Input className="loginField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                
                <br/><br/>

                <h2 id="loginLabel">Password</h2>
                <Input className="loginField"
                    type="password"
                    id="password"
                    label="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <span className="errorLabel">{errors}</span>
                <br/><br/>
                <Button className="buttonType1 loginButton" id="signinButton" onClick={signIn} type="primary">
                    Log In      
                </Button>
            </Card> 
        </div>
    );
}

export default SignIn;





    
    
    

