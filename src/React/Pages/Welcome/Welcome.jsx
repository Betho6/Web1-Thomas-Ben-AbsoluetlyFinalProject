import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';


const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <Tabbed/>     
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`

color:white;

img{
    display:block;
    margin-left:auto;
    margin-right:auto;
    width: 100%;
    max-height: 300px;
    overflow: hidden;
}
`;