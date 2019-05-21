import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CreateContainer = styled.form`
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

const CreateInputBox = styled.input`
    display: flex;
    border-radius: 5px;
    margin: 1px;
    padding: 4px;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    border: 2px solid #eee;
    width: 100%;
    text-align: center;

    :focus {outline-color: lightgrey};
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
}
`;

const CreateInputBoxTextArea = styled.textarea`
    display: flex;
    border-radius: 5px;
    margin: 1px;
    padding: 4px;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    border: 2px solid #eee;
    text-align: center;
    width: 100%;
    height: 100%;
    resize: none;

    :focus {outline-color: lightgrey};
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
}
`;

const CreateButton = styled.button`
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



class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            mealType: "",
            ingredients: "",
            instructions: "",
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleCreateSubmit = e => {
        e.preventDefault();
        const headers = { Authorization: localStorage.getItem('token') }
        axios
          .post("https://foodie-portfolio.herokuapp.com/recipe", this.state, { headers })
          .then(res => {
            // this.props.submitRecipePost(res.data);
            this.setState({
                title: "",
                image: "",
                mealType: "",
                ingredients: "",
                instructions: "",
            });
            console.log("CREATE RECIPE", this.state)
            
          })
          .catch(err => console.log(err));
        
        this.props.history.push("/recipes");
      };



    render() {
        return(
            <CreateContainer>
                <h1>Create A Recipe!</h1>
                <form >
                    <CreateInputBox
                        name="title"
                        placeholder="Recipe Title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange}                        
                    />
                    <CreateInputBox
                        name="image"
                        placeholder="Recipe Image URL"
                        type="text"
                        value={this.state.image}
                        onChange={this.handleInputChange}                             
                    />                    
                    <CreateInputBox
                        name="mealtype"
                        placeholder="Meal Type"
                        type="text"
                        value={this.state.mealtype}
                        onChange={this.handleInputChange}     
                    />
                    <CreateInputBoxTextArea
                        name="ingredients"
                        placeholder="Recipe Ingredients"
                        rows="10"
                        cols="40"                        
                        type="text"
                        value={this.state.ingredients}
                        onChange={this.handleInputChange}     
                    />
                    <CreateInputBoxTextArea
                        name="instructions"
                        placeholder="Recipe Instructions"
                        rows="10"
                        cols="40"
                        type="text"
                        value={this.state.instructions}
                        onChange={this.handleInputChange}     
                    />
                    <CreateButton onClick={this.handleCreateSubmit} disabled={!this.state.title || !this.state.image || !this.state.mealtype || !this.state.ingredients || !this.state.instructions}>Create Recipe!</CreateButton>                                        
                </form>
            </CreateContainer>
        )
    }
}

export default CreatePost;