import React from 'react';
import styled from 'styled-components';

const BackdropStyles = styled.div`
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    
    
    z-index: 100;
`;

const Backdrop = props => (
    <BackdropStyles onClick={props.closeClick}>
    </BackdropStyles>
);

export default Backdrop;