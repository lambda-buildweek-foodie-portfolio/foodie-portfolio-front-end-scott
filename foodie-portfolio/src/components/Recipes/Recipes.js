import React from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar/SearchBar';
import Recipe from './Recipe';

const StyledContainer = styled.div`
    text-align: center;
`;

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Title",
            imageUrl: "imageURL",
            mealType: "mealType",
            ingredients: "ingredients",
            instructions: "instructions",
        }
    }

    render() {
        return (
            <div>
                <SearchBar />              
                <StyledContainer>
                    
                    <div>
                    {this.state.title}
                    {this.state.imageUrl}
                    {this.state.mealType}
                    {this.state.ingredients}
                    {this.state.instructions}
                    </div>
                    
                    <Recipe />   
                </StyledContainer>
            </div>

        )
    }
}

export default Recipes;