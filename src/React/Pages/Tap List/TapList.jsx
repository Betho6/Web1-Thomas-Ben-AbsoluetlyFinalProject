import React, {useState} from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { tapList } from './tapListData.js';

/* Components ---------------------------*/
import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';


const TapList = () => {
    const [catChosen, catChosenUpdate] = useState ('All');


    return (
        <TapListStyled className='TapList'>
            <FilterNav
                tapList={  tapList } 
                catChosen={ catChosen } 
                catChosenUpdate={ catChosenUpdate }/>
            <Gallery
                tapList={ tapList }
                catChosen={ catChosen } />         
        </TapListStyled>
    );
}

export default TapList;

const TapListStyled = styled.div`
            backgroundimage: url( '../../../assets/img//taplist-background.jpg');  
`;