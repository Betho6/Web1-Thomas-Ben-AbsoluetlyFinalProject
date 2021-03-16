import React, { useState }  from 'react';
import styled from 'styled-components';
import Nav from './Nav.jsx';


/* Hamburger Components ---------------------------*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,} from '@fortawesome/free-solid-svg-icons';


const NavMobile = () => {
const[showMobileMenu, showMobileMenuUpdate] = useState (false)
const handleHamburgerToggle = () => {
    showMobileMenuUpdate (!showMobileMenu);
}

    return (
        <NavMobileStyled className='NavMobile'> 
        <div className="hamburger"
        onClick={ handleHamburgerToggle}
        >
            <FontAwesomeIcon icon={faBars}/>
        </div>
        {
            showMobileMenu &&

            <div className="nav-wrapper">
                <Nav/>
            </div>
        }

        </NavMobileStyled>
    );
}

export default NavMobile;

const NavMobileStyled = styled.div`

.hamburger{
    justify-content:right;
    color: white;
    margin-left: auto;
}

    svg{
        font-size: 30px;
        color: white;
    }
    
`;