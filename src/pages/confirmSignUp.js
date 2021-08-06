import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './confirmSignUp.css';
const ConfirmSignUp = () => {

    const [username, setUsername] = useState('');
    const [authCode, setAuthCode] = useState('');
    const history = useHistory();


    const confirmSignUp = async () => {
        try {
            const user = await Auth.confirmSignUp(username, authCode);
            history.push('/');

        } catch (error) {
            console.log('error singing in', error);
        }
    };


    return (  
          
        <div>
            <Card className="authCard" title="Sign Up" bordered={false}>
                <p className="authLabels">Username</p>
                <Input className="authField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <p className="authLabels">Authorization Code</p>
                <Input className="authField"
                    id="authCode"
                    label="AuthCode" 
                    value={authCode}
                    onChange={e => setAuthCode(e.target.value)}
                />
                <Button className="authButton" id="confirmSignup" onClick={confirmSignUp} type="primary">
                    Confirm Sign Up                
                </Button>
            </Card>
        </div>
    );
}

export default ConfirmSignUp;
