import React from 'react';
import styled from 'styled-components';
import jsonSchema from "../schemas/jsonSchema";
import uiSchema from "../schemas/uiSchema";
// import Form from "@rjsf/material-ui";
import Form from '@rjsf/core';
import formData from "../services/formData";

const StyledWrapper = styled.section`
  //display: flex;
  //flex-direction: column;
  //justify-content: flex-start;
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
    console.log(data.formData);
    alert(JSON.stringify(data.formData));
}
const log = (event) => {
    console.log(event);
}
const focusHander = (event) => {
    console.log(event);
}

export function LocationsPanel() {
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
                    onError={log("errors")}
                    onFocus={focusHander}
                />
            </StyledDetailArea>
        </StyledWrapper>
    );
}
