import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
 * This object field template controls the layout of an RJSF form.
 * It arranges all fields in a single row using flex-wrap and min-width to force the layout
 * to rows of two fields. For form widths approaching min-width each row contains one field.
 *
 * Add this custom object template to a `<form 0bjectFieldTemplate=TwoColObjectFieldTemplate `,
 * or to the RJSF UI schema,
 * ` "ui:TwoColObjectFieldTemplate": TwoColObjectFieldTemplate, `
 *
 * @param TitleField
 * @param properties array
 * @param title string
 * @param description
 * @returns {JSX.Element}
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

TwoColObjectFieldTemplate.propTypes = {
    TitleField: PropTypes.element.isRequired,
    properties: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
};

TwoColObjectFieldTemplate.defaultProps = {
    proerties: [],
    title: '',
    description: '',
};

export default TwoColObjectFieldTemplate;
