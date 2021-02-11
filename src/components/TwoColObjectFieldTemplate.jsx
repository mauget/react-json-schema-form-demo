import React from 'react';
import styled from 'styled-components';

const StyledObjectFieldTemplate = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledCol = styled.div`
  min-width: 44%;
  margin: 0.5rem;
  flex-grow: 1;
`;

/**
 * This object field template controls the layout of the form.
 * It arranges all fields in a single row using flex-wraap and min-width to force the layout
 * to rows of two fields. For form widths approaching min-width each row containts one field.
 *
 * Add this custom object template to a `<form 0bjectFieldTemplate=TwoColObjectFieldTemplate `,
 * or JSON UI schema,
 * ` "ui:TwoColObjectFieldTemplate": TwoColObjectFieldTemplate, `
 *
 * @param TitleField
 * @param properties
 * @param title
 * @param description
 * @returns {JSX.Element}
 * @constructor
 */
function TwoColObjectFieldTemplate({TitleField, properties, title, description}) {
    console.log(properties);
    return (
        <StyledObjectFieldTemplate>
            <TitleField title={title}/>
            <StyledRow>
                {properties.map(prop => (
                    <StyledCol key={prop.content.key}>
                        {prop.content}
                    </StyledCol>
                ))}
            </StyledRow>
            {description}
        </StyledObjectFieldTemplate>
    );
}

export default TwoColObjectFieldTemplate;
