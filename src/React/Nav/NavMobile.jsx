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
    position: fixed;
    top: 0px;
    right: 0px;
    text-align: center;
    padding-top: 9px;
    cursor: pointer;

    z-index:1001;
    }
    
    svg{
        font-size: 30px;
        color: white;
    }

    .nav-wrapper {
    background-image: url('../../../assets/img/nav-bg.jpg');
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    height: 150px;

    z-index: 1000;
    }

    a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 10px;
        margin-bottom: 5px;

    
`;