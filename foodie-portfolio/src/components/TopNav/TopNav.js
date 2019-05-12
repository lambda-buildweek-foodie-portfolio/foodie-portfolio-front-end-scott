import React from 'react';
import styled from 'styled-components';

import SideDrawerToggleButton from './../SideDrawer/SideDrawerToggleButton';

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
        color:white;

        text-decoration: none;
        font-size: 1.5rem;
    }
`;

const StyledToolbarNavItems = styled.div`
    a {
        color: white;
        text-decoration: none;

        :hover {cursor: pointer; color: blue };
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        padding: 0 .5rem;
    }
`;

const Spacer = styled.div`
    flex: 1;
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
                    <div>
                        <SideDrawerToggleButton click={this.state.props.drawerClickHandler}/>
                    </div>
                    <StyledToolbarLogo><a href="/">Logo</a></StyledToolbarLogo>
                    <Spacer></Spacer>
                    <StyledToolbarNavItems>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/create">Create Post</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                        </ul>
                    </StyledToolbarNavItems>
                </StyledToolbarNav>
            </StyledToolbar>
        )
    }
}

export default TopNav;