import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import jsonSchema from "../schemas/jsonSchema";
import uiSchema from "../schemas/uiSchema";
import Form from "@rjsf/material-ui";
// import TripleInputRow from "./customFormTemplates/TripleInputRow";
import getFormData from "../services/formData";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin: 1.5rem;
`;

export function LocationsPanel() {
    const [formData, setFormData] = useState({})
    useEffect(() =>{
        getFormData().then((data)=>{
            console.log(data);
            setFormData(data);
        }).catch((err)=> console.error(err));
    },[])

    return (
        <StyledWrapper>
            <StyledTitle>Demonstration of React JSON Schema</StyledTitle>
            <StyledDetailArea>
                {/*<Form schema={jsonSchema} uiSchema={uiSchema} formData={formData} fieldTemplate={TripleInputRow}/>*/}
                <Form schema={jsonSchema} uiSchema={uiSchema} formData={formData}/>
            </StyledDetailArea>
        </StyledWrapper>
    );
}
