import React from 'react';
import styled from 'styled-components';

const Slide = ({slide}) => {

    return (
        <SlideStyled className='Slide'>
            <img src={slide.image} alt={slide.title} /> 
            <h2>{slide.title}</h2>

            <div className='information'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam culpa ad asperiores facere harum earum veritatis corporis? Nesciunt aliquid enim suscipit consequatur cum tempore explicabo cupiditate error placeat architecto!</p>
            </div>
        </SlideStyled>
    );
}

export default Slide;

const SlideStyled = styled.div`

h2{
    color: white;
}

.information{
    background-image: url('../../../assets/img/whatson-bg2.jpg');
    color: white;
}
    
`;