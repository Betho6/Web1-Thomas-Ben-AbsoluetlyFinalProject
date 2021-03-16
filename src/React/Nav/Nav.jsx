import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Nav = () => {

    return (
        <NavStyled className='Nav'>

            <NavLink to="taplist" > Tap List </NavLink>
            <NavLink to="Whatson" > What's On </NavLink>
            {/* <NavLink to="vendors" > Vendors </NavLink>  */}
            <NavLink to="contact" > Contact </NavLink>

        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.div`
    padding-top:25px;

    
`;