import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import SearchBar from '../SearchBar/SearchBar';
import Recipe from './Recipe';

const StyledContainer = styled.div`
    text-align: center;
`;

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],

        }
    }

    componentDidMount() {
        axios
          .get(`https://foodie-portfolio.herokuapp.com/recipe`)
          .then(res => 
            {console.log("GET REQUEST",res.data);
            this.setState({recipes: res.data });
            console.log("GET STATE",this.state)
          })
          .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <SearchBar />              
                <StyledContainer>
                    
                    <div>

                        {this.state.recipes.map(recipe => (<Recipe key={recipe.id} recipeID={recipe.id} recipeTitle={recipe.title} recipeIngrdients={recipe.ingredients}/>))}
                    </div>
                    
                    <Recipe />   
                </StyledContainer>
            </div>

        )
    }
}

export default Recipes;