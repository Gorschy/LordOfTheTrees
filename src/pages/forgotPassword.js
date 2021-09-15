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

const ForgotPassword = () => {

    const [username, setUsername] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState('');


    const forgotPassword = async () => {
        
        try {
            // Send confirmation code to user's email
            //check if await and const user can be removed
           const user = await Auth.forgotPassword(username)
            .then(data => console.log(data));
            history.push('/forgotPasswordAuth');

        } catch (error) {
            // Catch errors
            setErrors(error.message);
        }
    };



    return ( 
        
        <div>
            <Card className="loginCard" title={<h1>Forgot Password</h1>} bordered={false} >
                <br/>

                <h2 id="loginLabel" >Enter your email</h2>
                <Input className="loginField"
                    id="username"
                    label="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                
                <br/><br/>
                <span className="errorLabel">{errors}</span>
                <br/><br/>
                <Button className="buttonType1 loginButton" id="signinButton" onClick={forgotPassword} type="primary">
                    Forgot Password     
                </Button>
            </Card> 
        </div>
    );
}

export default ForgotPassword;







    
    
    

