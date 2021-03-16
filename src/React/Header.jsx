import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { mq } from '../common/media_queries.js';
import  useMediaQuery  from '../common/useMediaQuery.js';

/* Components ---------------------------*/
import NavMobile from './Nav/NavMobile.jsx'
import NavLarge from './Nav/NavLarge.jsx'



const Header = () => {
    const { isSmall } = useMediaQuery ();


    return (
        <HeaderStyled className='Header'>
            <NavLink to="/" exact> 
                <img src='/assets/img/generic_logo.png'alt='A Generic Bar Logo'/>
            </NavLink>
            {
                    isSmall
                    ? <NavMobile className='NavMobile' />
                    : <NavLarge />
                }       
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`

background-image: url('../../../assets/img/nav-bg.jpg');
height:100px;

img{
    height: 100px;
}


@media ${mq.tablet}{
display: flex;
}

@media ${mq.desktop}{
img {
display: block;
margin-left: auto;
margin-right: auto;
height: 100px ;
max-width: 100%;
    }
}
`;