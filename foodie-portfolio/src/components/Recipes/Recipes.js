import React from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar/SearchBar';

const StyledContainer = styled.div`
    text-align: center;
`;

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <SearchBar />                
                <StyledContainer>
                    Recipes List         
                </StyledContainer>
            </div>

        )
    }
}

export default Recipes;