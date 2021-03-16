import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import GalleryItem from './GalleryItem';

const Gallery = ({tapList, catChosen}) => {

    return (
        <GalleryStyled className='Gallery'>
            {
                tapList.packages
                    .filter((beer)=>{
                        return(catChosen === 'All' || beer.category === catChosen)
                    })
                    .map((beer, idx) => {
                        return <GalleryItem key={ idx } beer= {beer}/>
                    })
            } 
        
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;  
`;