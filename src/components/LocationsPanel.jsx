import React from 'react';
import styled from 'styled-components';
import jsonSchema from "../schemas/jsonSchema";
import uiSchema from "../schemas/uiSchema";
import Form from "@rjsf/core";
import formData from "../services/formData";

// const formData = {
//     "title": "A registration form",
//     "description": "A simple form example.",
//     "type": "object",
//     "required": [
//         "firstName",
//         "lastName"
//     ],
//     "properties": {
//         "firstName": {
//             "type": "string",
//             "title": "First name",
//             "default": "Chuck"
//         },
//         "lastName": {
//             "type": "string",
//             "title": "Last name"
//         },
//         "telephone": {
//             "type": "string",
//             "title": "Telephone",
//             "minLength": 10
//         }
//     }
// };

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem;
  padding: 4rem;
  max-width: 50%;
  border: solid 2px papayawhip;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

const StyledDetailArea = styled.div`
  margin: 1.5rem;
`;

export function LocationsPanel() {
    return (
        <StyledWrapper>
            <StyledTitle>Demonstration of React JSON Schema</StyledTitle>
            <StyledDetailArea>
                <Form schema={jsonSchema} uiSchema={uiSchema} formData={formData}/>
            </StyledDetailArea>
        </StyledWrapper>
    );
}
