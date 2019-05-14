import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';



const StyledToolbar = styled.header`
    background: grey;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 20%;
`;

const StyledToolbarNav = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 1rem;
`;

const StyledToolbarLogo = styled.div`
    margin: 0 0 0 1rem;
    a {
        color:lightgrey;
        text-decoration: none;
        font-size: 1.5rem;
    }
`;

const StyledToolbarNavItems = styled.div`
    a {

    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        
    }
`;

const Spacer = styled.div`
    flex: 1;
`;

const StyledNavLink = styled(NavLink)`
        padding: 0 .5rem;
        color: lightgrey;
        text-decoration: none;
        :hover {cursor: pointer; color: white };
        &.active {
            color: darkgrey
        }

`;




class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {props};
        console.log("PROPPPPPPPS",this.state.props)
    }

    render() {
        return(
            <StyledToolbar>
                <StyledToolbarNav>
                    <StyledToolbarLogo><a href="/">Logo</a></StyledToolbarLogo>
                    <Spacer></Spacer>
                    <StyledToolbarNavItems>
                        <ul>
                            <StyledNavLink to="/" exact activeClassName="active">Login</StyledNavLink>
                            <StyledNavLink to="/signup" activeClassName="active">Signup</StyledNavLink>
                            <StyledNavLink to="/createpost" activeClassName="active">Create Post</StyledNavLink>
                            <StyledNavLink to="/portfolio" activeClassName="active">Portfolio</StyledNavLink>
                            <StyledNavLink to="/recipes" activeClassName="active">Recipes</StyledNavLink>
                            

                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/create">Create Post</a></li>
                            <li><a href="/portfolio">Portfolio</a></li> */}
                        </ul>
                    </StyledToolbarNavItems>
                </StyledToolbarNav>
            </StyledToolbar>
        )
    }
}

export default TopNav;