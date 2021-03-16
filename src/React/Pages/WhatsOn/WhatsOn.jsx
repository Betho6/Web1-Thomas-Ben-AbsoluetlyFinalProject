import React from 'react';
import styled from 'styled-components';
import { slides } from 'common/slidesData';


/* Components ---------------------------*/
import Slideshow from './Slideshow/Slideshow'; 

/* Scripts ---------------------------*/
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


const WhatsOn = ({slide}) => {

    return (
        <WhatsOnStyled className='WhatsOn'>
            <div className= "nested">
                <Slideshow />
            </div>       
        </WhatsOnStyled>
    );
}

export default WhatsOn;

const WhatsOnStyled = styled.div`

`;