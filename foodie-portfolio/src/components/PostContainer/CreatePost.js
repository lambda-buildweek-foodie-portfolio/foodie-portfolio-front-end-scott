import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CreatePostContainer = styled.form`
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

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            imageUrl: "",
            mealType: "",
            ingredients: "",
            instructions: "",
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
          .post("API_URL", this.state)
          .then(res => {
            this.props.submitRecipePost(res.data);
          })
          .catch(err => console.log(err));
        this.setState({
            title: "",
            imageUrl: "",
            mealType: "",
            ingredients: "",
            instructions: "",
        });
        this.props.history.push("/recipes");
      };

    render() {
        return(
            <CreatePostContainer>
                <h1>Create A Recipe!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="title"
                        placeholder="Title"
                        type="text"
                    />
                    <input
                        name="image"
                        placeholder="Image URL"
                        type="text"
                    />                    
                    <input
                        name="mealtype"
                        placeholder="Meal Type"
                        type="text"
                    />
                    <textarea
                        name="ingredients"
                        placeholder="Ingredients"
                        rows="10"
                        cols="40"                        
                        type="text"
                    />
                    <textarea
                        name="instructions"
                        placeholder="Instructions"
                        rows="10"
                        cols="40"
                        type="text"
                    />
                    <button>Create Recipe!</button>                                        
                </form>
            </CreatePostContainer>
        )
    }
}

export default CreatePost