import React from 'react';

import styled from 'styled-components';

const ToggleButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background: white;
`;

const ToggleButton = styled.button`
    background: transparent;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 24px;
    justify-content: space-around;
    padding: 0;
    width: 30px;

    :focus {outline: none};
`;


const SideDrawerToggleButton = props => (
    <ToggleButton onClick={props.click}>

        <ToggleButtonLine></ToggleButtonLine>
        <ToggleButtonLine></ToggleButtonLine>
        <ToggleButtonLine></ToggleButtonLine>
    </ToggleButton>
);

export default SideDrawerToggleButton;