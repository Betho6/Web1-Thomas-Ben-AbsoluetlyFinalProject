import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import {mq} from '../../../../common/media_queries.js';


const TabbedContent = ({changeTabs, chosenTab}) => {

    console.log('chosenTab', chosenTab);

    return (
        <TabbedContentStyled className='TabbedContent'>
            <div className="right">
                <h3>{chosenTab.title}</h3>
                <div dangerouslySetInnerHTML={{__html: chosenTab.text }} />
            </div>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    background-color:black;
    padding: 20px
`;