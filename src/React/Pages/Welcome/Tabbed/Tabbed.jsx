import React, {useState} from 'react';
import styled from 'styled-components';

/* Script ---------------------------*/
import { tabItems } from './tabbed_data.js'
import useMediaQuery from '../../../../common/useMediaQuery.js';


/* Components ---------------------------*/
import TabbedNav from './TabbedNav.jsx';
import TabbedContent from './TabbedContent.jsx';
import TabbedContentMobile from './TabbedContentMobile.jsx'

const Tabbed = () => {

    const { isSmall } = useMediaQuery ();

    const [ chosenTab, chosenTabUpdate,] = useState (tabItems[0]);
    
    const changeTabs = (tabItems) => {
        chosenTabUpdate(tabItems)
    }

    return (
        <TabbedStyled className='Tabbed'>
            <div className="left">
                <img src={ chosenTab.image } alt={chosenTab.title} />
            </div>
    {
        isSmall
            ?<TabbedContentMobile/>
            :<div>
                <TabbedNav changeTabs={ changeTabs} tabItems= { tabItems } chosenTab= {chosenTab}/>
                <TabbedContent chosenTab={ chosenTab } />
            </div>
    }
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
overflow:hidden;
`;