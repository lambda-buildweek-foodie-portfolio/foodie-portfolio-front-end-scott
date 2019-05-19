import React from 'react';
import styled from 'styled-components'

const SideDrawerStyles = styled.nav`
    height: 100%;
    background: white;
    box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;

    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        list-style: none;
    }
    
    li {
        margin: .5rem 0;
    }

    a {
        color: blue;
        font-aize: 1.2rem;
        text-decoration: none;

        :hover { color: grey }
        :active { } 
    }
`;



const SideDrawer = props => {
    return(
        <SideDrawerStyles>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/create">Create Post</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
            </ul>
        </SideDrawerStyles>
    );
}


export default SideDrawer
