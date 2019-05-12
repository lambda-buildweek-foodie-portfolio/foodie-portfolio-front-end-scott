import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const StyledSearchContainer = styled.div`
    text-align: center;
    margin: 20% 0 0 0;
`;
const SearchBar = props => {
    return (
        <StyledSearchContainer>
            <FontAwesomeIcon icon={faUserCircle} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faHome} />
        </StyledSearchContainer>
    )
}

export default SearchBar;