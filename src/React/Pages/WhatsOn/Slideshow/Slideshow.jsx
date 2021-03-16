import { slides } from 'common/slidesData';
import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Slide from './Slide';

/* Scripts ---------------------------*/
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"



const Slideshow = () => {

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
                showthumbs={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop= {true }
                showArrows= { true }
            >    
                {
                    slides.map((slide, idx)=> {
                        return <Slide key={idx} slide ={slide} />
                    })
                }
            </Carousel>
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
padding:0px;
    
`;