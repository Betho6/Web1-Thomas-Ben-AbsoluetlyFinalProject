import React, {useState} from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Button from './Button.jsx'
import FieldGroups from './FieldGroups/FieldGroups.jsx'

/* Scripts ---------------------------*/
import {isValidEmail} from '../../../common/utilities.js'
import API from '../../../common/API.js';


const UniversalForm = ({fields, submitText, apiURL}) => {

    const [theFields, theFieldsUpdate] = useState(fields);
    
    const handleFieldUpdate = (theUpdatedField) => {


/* Validation ---------------------------*/

    const validation = theUpdatedField.validation;

        let errors =[];

        validation.forEach((val)=> {
            switch (val) {
                case 'req':
                    if (theUpdatedField.value.length <1) {
                        errors.push(`the ${theUpdatedField.label} is requiered`);
                    }
                    break;
                case 'email':
                    if (!isValidEmail(theUpdatedField.value)) {
                            errors.push(`The ${theUpdatedField.label} is not a valid email`);
                        }
                        break;
                default: 
                    return true;
            }
        });

        let validatedField = {
            ...theUpdatedField,
            errors: errors,
        }


/* Update Fields ---------------------------*/
        const newFields = theFields.map((field) => {
            return (field.id === validatedField.id) ? validatedField :field;
        });

    /* Updated State ---------------------------*/
        theFieldsUpdate(newFields);
    }

        const handleFormSubmit = (event) => {
            event.preventDefault();

//check have they passed validation
            const hasErrors = theFields.find(field =>{
                return (field.errors && field.errors.length > 0);
            });

            if (!hasErrors) {
                console.log('Ready to Submit Data', theFields);

                API.post(apiURL, theFields).then((response) => {
            });
            
            }


        }


    return (
        <UniversalFormStyled className='UniversalForm'
                        className='UniversalForm'
            onSubmit={ handleFormSubmit}>
            {
            theFields.map((theField, idx)=> {
                return <FieldGroups 
                    key={ idx }
                    id={ theField.id}
                    theFields={ theFields }
                    handleFieldUpdate={ handleFieldUpdate}
                    />
            })
            }
            <Button type="submit"> {submitText} </Button> 
        </UniversalFormStyled>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;