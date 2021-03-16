import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { mq } from '../common/media_queries.js';

/* Components ---------------------------*/
import Header from './Header'
import Main from './Main.jsx'

const Container = () => {


    return (
        <BrowserRouter>
            <ContainerStyled className='Container'>
                <Header/>        
                <Main/>
            </ContainerStyled>
        </BrowserRouter>
    );
}

export default Container;

const ContainerStyled = styled.div`
`;