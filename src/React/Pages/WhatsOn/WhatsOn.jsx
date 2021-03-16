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

        <div className='information'>
            <h2>slide.title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam culpa ad asperiores facere harum earum veritatis corporis? Nesciunt aliquid enim suscipit consequatur cum tempore explicabo cupiditate error placeat architecto!</p>


        </div>
        </WhatsOnStyled>
    );
}

export default WhatsOn;

const WhatsOnStyled = styled.div`
   /* .infromation{    */
    background-image: url('../../../assets/img/whatson-bg2.jpg');
    padding-top: 20px;


    h2{
        color:White;
        background-color:Black;
        padding: 10px;
        margin-bottom: 5px;
    }
.information{
    background-image: url('../../../assets/img/nav-bg.jpg'); 
    color:white;
    padding:15px;

}
`;