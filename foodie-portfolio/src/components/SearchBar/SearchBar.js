import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const StyledSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20% 0 0 0;
`;

const SearchInputBox = styled.input`
    border-radius: 5px;
    margin: 1px;
    padding: 4px;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    border: 2px solid #eee;

    :focus {outline-color: lightgrey};
    :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 9999px white;
    }
    
}
`;

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        search: ""
      };
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        this.props.filterRecipe(this.state.search);
        this.setState({ search: ''});
        this.setState({ [e.target.name]: e.target.value });
    };
    
    submitSearch = e => {
        e.preventDefault();
        this.props.filterRecipe(this.state.search)
        this.setState({ search: ''});
    }

    render() {
        return (
            <StyledSearchContainer>
                <FontAwesomeIcon icon={faSearch} />
                <form>
                    <SearchInputBox
                        placeholder="search"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleChange}
                        type="text"
                        >
    
                    </SearchInputBox>
                </form>
            </StyledSearchContainer>
        )
    }

}
export default SearchBar;