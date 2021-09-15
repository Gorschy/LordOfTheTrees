import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './login.css';
import '../style.css';


/* TODO:
    - forgot password
    - keep me signed in?
*/

const ForgotPasswordAuth = () => {

    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const history = useHistory();

    const [errors, setErrors] = useState('');


    const forgotPasswordSubmit = () => { 
        try {
            // Collect confirmation code and new password, then
            Auth.forgotPasswordSubmit(username, code, newPassword)
            .then(data => console.log(data))
            .catch(err => console.log(err));
            history.push('/login');

        } catch (error) {
            // Catch errors
            setErrors(error.message);
        }
    };


    return (  
        <div>
            <Card className="loginCard" title={<h1>Reset Password</h1>} bordered={false} >
                
                <br/>

                <h2 id="loginLabel" >Email</h2>
                <Input className="loginField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                
                <br/><br/>

                <h2 id="loginLabel">Auth Code</h2>
                <Input className="loginField"
                    id="code"
                    label="code" 
                    value={code}
                    onChange={e => setCode(e.target.value)}
                />

                <br/><br/>

                <h2 id="loginLabel">New Password</h2>
                <Input className="loginField"
                    type="password"
                    id="newPassword"
                    label="newPassword" 
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <span className="errorLabel">{errors}</span>
                <br/><br/>

                <Button className="buttonType1 loginButton" id="signinButton" onClick={forgotPasswordSubmit} type="primary">
                    Update Password     
                </Button>
            </Card> 
        </div>
    );
}

export default ForgotPasswordAuth;





    
    
    

