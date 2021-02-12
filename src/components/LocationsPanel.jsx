import React, { useRef } from 'react';
import styled from 'styled-components';
import Form from '@rjsf/core';
import toastr from 'toastr/toastr';
import jsonSchema from '../schemas/jsonSchema';
import uiSchema from '../schemas/uiSchema';
import getFormData from '../services/getFormData';


const StyledWrapper = styled.section`
    margin: 2rem;
    padding: 4rem;
    border: solid 1px darkred;
    color: darkslateblue;
    border-radius: 12px;
`;

const StyledTitle = styled.h1`
    font-size: 1.5rem;
    text-align: center;
`;

const StyledDetailArea = styled.div`
    margin: 1.5rem;
`;

export default function LocationsPanel() {
    const ref = useRef(getFormData());

    const submitHandler = () => {
        // eslint-disable-next-line no-console
        console.log(ref.current);
        toastr.success(JSON.stringify(ref.current));
    };

    const handleOnChange = (event) => {
        ref.current = event.formData;
    };

    return (
        <StyledWrapper>
            <StyledTitle>Demonstration of React JSON Schema</StyledTitle>
            <StyledDetailArea>
                <Form
                    dataTestId="testid"
                    schema={jsonSchema}
                    uiSchema={uiSchema}
                    formData={ref.current}
                    onChange={handleOnChange}
                    onSubmit={submitHandler}
                />
            </StyledDetailArea>
        </StyledWrapper>
    );
}
