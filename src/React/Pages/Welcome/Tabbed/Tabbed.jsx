import React, {useState} from 'react';
import styled from 'styled-components';

/* Script ---------------------------*/
import { tabItems } from './tabbed_data.js'
import useMediaQuery from '../../../../common/useMediaQuery.js';


/* Components ---------------------------*/
import TabbedNav from './TabbedNav.jsx';
import TabbedContent from './TabbedContent.jsx';

const Tabbed = () => {

    const { isSmall } = useMediaQuery ();

    const [ chosenTab, chosenTabUpdate,] = useState (tabItems[0]);
    
    const changeTabs = (tabItems) => {
        chosenTabUpdate(tabItems)
    }

    return (
        <TabbedStyled className='Tabbed' chosenURL={ chosenTab.image }>
            <div className='myTabs'>
                <TabbedNav changeTabs={ changeTabs} tabItems= { tabItems } chosenTab= {chosenTab}/>
                <TabbedContent chosenTab={ chosenTab } />
            </div>
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    overflow:hidden;

    padding-top: 300px;

    background-image: url('${({chosenURL}) => chosenURL}');
    background-size: cover;
    background-position:center top;
    background-attachment: fixed;
    background-repeat: no-repeat;

`;