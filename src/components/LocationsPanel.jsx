import React from 'react';
import styled from 'styled-components';
import Form from '@rjsf/core';
import jsonSchema from '../schemas/jsonSchema';
import uiSchema from '../schemas/uiSchema';
import formData from '../services/formData';

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

const submitHandler = (data) => {
    // eslint-disable-next-line no-console
    console.log(data.formData);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data.formData));
};

const log = (event) => {
    // eslint-disable-next-line no-console
    console.log(event);
};

const focusHandler = (event) => {
    // eslint-disable-next-line no-console
    console.log(event);
};

export default function LocationsPanel() {
    return (
        <StyledWrapper>
            <StyledTitle>Demonstration of React JSON Schema</StyledTitle>
            <StyledDetailArea>
                <Form
                    schema={jsonSchema}
                    uiSchema={uiSchema}
                    formData={formData}
                    liveValidate
                    onSubmit={submitHandler}
                    onError={log('errors')}
                    onFocus={focusHandler}
                />
            </StyledDetailArea>
        </StyledWrapper>
    );
}
