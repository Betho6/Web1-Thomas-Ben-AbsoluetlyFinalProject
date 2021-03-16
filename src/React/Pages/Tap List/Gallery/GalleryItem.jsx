import React, {useState} from 'react';
import styled from 'styled-components';
import { tapList } from '../tapListData';


/* Components ---------------------------*/
import LightBox from '../../../Shared/Lightbox/LightBox.jsx'


const GalleryItem = ({beer}) => {
    const [showLightbox, showLightboxUpdate] = useState (false)
    
    const handleOnHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);
    }

    const handleOnShow = () => {
        showLightboxUpdate(true);
    }

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div class='piece' onClick= {handleOnShow}>
                <img src= {beer.image} alt={beer.description}/>
                <h2>{beer.title} </h2> <h3>{beer.category}</h3>
            </div>


            <LightBox 
                show= { showLightbox }
                onHide={ handleOnHide }
            >
                <img src={ beer.image } alt={beer.title} />
                <h2>{ beer.title } </h2> 
                <h3>{ beer.category }</h3>  
            </LightBox>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`

position: relative;
margin: 10px;


.piece{
h2{
        position: absolute;
        bottom: 0px; left:0px; right: 0px;
        background-color:rgba(0, 0, 0, 0.75);
        color:white;
        margin: 0px;
        padding: 10px;
        padding-top:15px;
        text-align: right;
    }

    h3 {
        position: absolute;
        top: 0px; left: 0px; right:0px;
        background-color: rgba(0, 0, 0, 0.462);
        color: white;
        margin: 0px;
        padding: 5px;
        text-align: right;
    }
}

.Lightbox{
        img{
            background-color:black;
            display:block;
            max-width:100%;
        
        }
    }

    h2{
        background-color:black;
        color:white;
        padding: 10px;
        margin: 10px;
    }   
    h3{
        background-color:black;
        color:white;
        padding: 10px;
        margin: 10px;
    }
`;