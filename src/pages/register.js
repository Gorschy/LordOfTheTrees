import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './register.css';
const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [given_name, setGivenName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const history = useHistory();
    

    const signUp = async () => {
        try {
            const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                given_name,     //optional
                family_name,      //optional
                phone_number,   // optional - E.164 number convention.expected phone format +01234567890
                // other custom attributes 
            }
        });
            history.push('/confirmSignUp');

        } catch (error) {
            console.log('error singing in', error);
        }
    };

    return (  
          
        <div>
            <Card className="registerCard" title="Sign Up" bordered={false}>
                <p className="registerLabels">Username</p>
                <Input className="registerField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <p className="registerLabels">Password</p>
                <Input className="registerField"
                    type="password"
                    id="password"
                    label="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p className="registerLabels">Phone Number</p>
                <Input className="registerField"
                    type="phone_number"
                    id="phone_number"
                    label="phone_number" 
                    value={phone_number}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <p className="registerLabels">First Name</p>
                <Input className="registerField"
                    type="given_name"
                    id="given_name"
                    label="given_name" 
                    value={given_name}
                    onChange={e => setGivenName(e.target.value)}
                />
                <p className="registerLabels">Last Name</p>
                <Input className="registerField"
                    type="family_name"
                    id="family_name"
                    label="family_name" 
                    value={family_name}
                    onChange={e => setFamilyName(e.target.value)}
                />
                <Button className="registerButton" id="signUpButton" onClick={signUp} type="primary">
                    Sign up                 
                </Button> 
            </Card> 
        </div>
    );
}

export default Register;
