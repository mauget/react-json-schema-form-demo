import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import jsonSchema from "../schemas/jsonSchema";
import uiSchema from "../schemas/uiSchema";
import Form from "@rjsf/material-ui";
import getFormData from "../services/formData";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  margin: 2rem;
  padding: 4rem;
  max-width: 50%;
  border: solid 2px darkgrey;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const StyledDetailArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  margin: 1.5rem;
`;

export function LocationsPanel() {
    const [formData, setFormData] = useState({})
    useEffect(() => {
        getFormData().then((data) => {
            setFormData(data);
        }).catch((err) => console.error(err));
    }, [])

    return (
        <StyledWrapper>
            <StyledTitle>Demonstration of React JSON Schema</StyledTitle>
            <StyledDetailArea>
                <Form schema={jsonSchema} uiSchema={uiSchema} formData={formData}/>
            </StyledDetailArea>
        </StyledWrapper>
    );
}
