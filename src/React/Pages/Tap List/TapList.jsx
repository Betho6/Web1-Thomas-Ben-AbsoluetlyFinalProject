import React, {useState} from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { tapList } from './tapListData.js';

/* Components ---------------------------*/
import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';
import YoutubeVideo from './YoutubeVideo.jsx'
import { divide } from 'lodash';

const TapList = () => {
    const [catChosen, catChosenUpdate] = useState ('All');


    return (
        <TapListStyled className='TapList'>
            <div className= "video">
                <YoutubeVideo />
            </div> 

            <div className="Nav">
                <FilterNav
                    tapList={  tapList } 
                    catChosen={ catChosen } 
                    catChosenUpdate={ catChosenUpdate }/>
            </div>  

            <Gallery
                tapList={ tapList }
                catChosen={ catChosen } />        
        </TapListStyled>
    );
}

export default TapList;

const TapListStyled = styled.div`
            backgroundimage: url( '../../../assets/img//taplist-background.jpg');  
        
        .video{
            display:flex;
            justify-content:center;
            padding: 20px;
        }

        .Nav{
            display:flex;
            justify-content:center;
        }

        background-color: grey;
`;