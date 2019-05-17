import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20% 0 0 0;
  margin: 0 auto;
  
  input {
      margin: 5px auto;
  }
`;

const SignupButton = styled.button`
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
  :disabled:hover {background: lightgrey; border: grey; color: white;};
  :focus {outline: none};
  :hover {background-color: white; color: grey; border: 1px solid grey; cursor: pointer }
`;

const SignupInputBox = styled.input`
    display: flex;
    border-radius: 5px;
    margin: 1px;
    padding: 4px;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    border: 2px solid #eee;
    text-align: center;

    :focus {outline-color: lightgrey};
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
}
`;

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            location: "",
            email: ""
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSignupSubmit = e => {
        e.preventDefault();
        const user = this.state.username;
        const  password = this.state.password
        const confirmPassword  = this.state.confirmPassword;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            // make API call
            localStorage.setItem("user", user);
            window.location.reload();
        }

      };
    
    render() {
        return(
            
            <SignupContainer>
                <form>
                    <SignupInputBox 
                        type="text"
                        placeholder="User Name"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                    <SignupInputBox 
                        type="text"
                        placeholder="User Location"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                    />
                    <SignupInputBox 
                        type="text"
                        placeholder="User Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <SignupInputBox 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <SignupInputBox 
                        type="password"
                        placeholder="Re-Enter Password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                    />                                                   
                    <SignupButton onClick={this.handleSignupSubmit} disabled={!this.state.username || ! this.state.location || !this.state.email || !this.state.password || !this.state.confirmPassword}>
                        Sign Up
                    </SignupButton>                
                </form>
            </SignupContainer>
            
        );
    }
}

export default SignUp;

