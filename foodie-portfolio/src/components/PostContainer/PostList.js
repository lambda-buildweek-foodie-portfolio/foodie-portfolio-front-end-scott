import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
    text-align: center;
`;

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <StyledContainer>
                Foodie Portfolio App            
            </StyledContainer>
        )
    }
}

export default PostList;