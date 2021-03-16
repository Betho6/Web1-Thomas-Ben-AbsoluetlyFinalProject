import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FilterNavButton from './FilterNavButton.jsx'

const FilterNav = ({ tapList, catChosen, catChosenUpdate}) => {
    

    return (
        <FilterNavStyled className='FilterNav'>
            {  
                tapList.categories.map((category, idx) => {
                    return <FilterNavButton
                                key= {idx} 
                                category={ category }
                                catChosen={ catChosen }
                                catChosenUpdate={ catChosenUpdate }
                            />
                    })
            }            
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    display: flex;
`;