import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import SignUp from './SignUp';

const LoginContainer = styled.form`
  display: flex;
  justify-content: center;
  margin: 20% 0 0 0;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: grey;
  color: white;
  display: block;
  font-size: 15px;
  padding: 10px;
  margin: 10px 0 10px 0;
  text-decoration: none;
  width: 100%;
  
  :disabled {background: lightgrey};
  :disabled:hover {background: lightgrey; border: white; color: white;};
  :focus {outline: none};
  :hover {background-color: white; color:#115D8D; border: 1px solid #115D8D; cursor: pointer }
`;

const InputBox = styled.input`
    border-radius: 5px;
    margin: 1px;
    padding: 4px;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    border: 2px solid #eee;

    :focus {outline-color: lightgrey};
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
}
`;

const SignupLink = styled(Link)`
    color: blue;
    font-weight: bold;
    display: flex;
    justify-content: center;
    
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
      };
    
    render() {
        return(
            <div>
                <LoginContainer>
                    <form onSubmit={this.handleLoginSubmit}>
                    <InputBox 
                        type="text"
                        placeholder="User Name"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <InputBox 
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <LoginButton onClick={this.handleLoginSubmit} disabled={!this.state.username || !this.state.password}>
                        Log In
                    </LoginButton>
                    </form>                
                </LoginContainer>
                <SignupLink to="/signup" component={SignUp}>Click Here to Sign Up!</SignupLink>
            </div>
            
        );
    }
}

export default Login;