import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './confirmSignUp.css';
import '../style.css';
const ConfirmSignUp = () => {

    const [username, setUsername] = useState('');
    const [authCode, setAuthCode] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState('');

    const confirmSignUp = async () => {
        try {
            const user = await Auth.confirmSignUp(username, authCode);
            history.push('/');

        } catch (error) {
            console.log('error singing in', error);
            setErrors(error.message);
        }
    };


    return (  
          
        <div>
            <Card className="authCard" title={<h1>Sign Up</h1>}>
                <h2 className="authLabels">Email</h2>
                <Input className="authField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <br/><br/>
                <h2 className="authLabels">Authorization Code</h2>
                <Input className="authField"
                    id="authCode"
                    label="AuthCode" 
                    value={authCode}
                    onChange={e => setAuthCode(e.target.value)}
                />
                <span className="errorLabel">{errors}</span>
                <br/><br/>
                <Button className="authButton" id="confirmSignup" onClick={confirmSignUp} type="primary">
                    Confirm Sign Up                
                </Button>
            </Card>
        </div>
    );
}

export default ConfirmSignUp;
