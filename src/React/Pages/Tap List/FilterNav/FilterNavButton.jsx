import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({category, catChosen, catChosenUpdate}) => {

    const handleCatUpdate =()=>{
        catChosenUpdate(category);
    }

    const theClassName =(category === catChosen)
        ? 'FilterNavButton active'
        : 'FilterNavButton'

    return (
        <FilterNavButtonStyled className= { theClassName }>
            <button
                onClick={ handleCatUpdate }
            >
                { category }
            </button> 
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
padding: 5px;

button{
    border-color:black;
    color: white;
    background-color: black;
    font-size: 20pt;
}
`;