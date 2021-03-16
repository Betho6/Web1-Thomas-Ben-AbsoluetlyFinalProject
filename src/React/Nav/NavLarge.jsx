import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Nav from './Nav.jsx'

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav/> 
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`
display: flex;
justify-content: center;

.Nav {
    display: flex;
    width: 600px;
    }


a {
        flex: 1;
        text-align:center;
        display: block;
        color: white;
        text-decoration: none;
        padding: 10px;
        margin: 0px 5px;
    
`;