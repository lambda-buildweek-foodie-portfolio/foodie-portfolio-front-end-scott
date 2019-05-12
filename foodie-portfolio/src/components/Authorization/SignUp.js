import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            location: "",
            email: ""
            }
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
            <form>
                <input 
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleLoginSubmit}>
                    Log In
                </button>                
            </form>
        );
    }
}

export default SignUp;