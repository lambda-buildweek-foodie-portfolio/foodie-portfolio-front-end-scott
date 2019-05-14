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
    
      handleLoginSubmit = e => {
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
            <div>
            <SignupContainer>
            
                <input 
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="User Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="User Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="Re-Enter Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleInputChange}
                />                                                   
                <button onClick={this.handleLoginSubmit}>
                    Sign Up
                </button>                
            
            </SignupContainer>
            </div> 
        );
    }
}

export default SignUp;