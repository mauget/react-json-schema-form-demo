import React from 'react';
import PropTypes from 'prop-types';
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
    margin: 0 2rem 0 0;
    flex-grow: 1;
`;

/**
 * This object field template controls the layout of an "RJSF" form.
 * It arranges all fields in a single row using flex-wrap and min-width to force the layout
 * to rows of two fields. For form widths approaching min-width each row contains one field.
 *
 * Add this custom object template to a `<form objectFieldTemplate=MultiColumnObjectFieldTemplate `,
 * or to the RJSF UI schema,
 * ` "ui:MultiColumnObjectFieldTemplate": MultiColumnObjectFieldTemplate, `
 *
 * @param TitleField
 * @param properties array
 * @param title string
 * @param description
 * @returns {JSX.Element}
 */
function TwoColObjectFieldTemplate({
    TitleField,
    properties,
    title,
    description,
}) {
    return (
        <StyledObjectFieldTemplate>
            <TitleField title={title} />
            <StyledRow>
                {properties.map((prop) => (
                    <StyledCol key={prop.content.key}>{prop.content}</StyledCol>
                ))}
            </StyledRow>
            {description}
        </StyledObjectFieldTemplate>
    );
}

TwoColObjectFieldTemplate.propTypes = {
    TitleField: PropTypes.func.isRequired,
    properties: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
    description: PropTypes.string,
};

TwoColObjectFieldTemplate.defaultProps = {
    title: '',
    description: '',
    properties: [],
};

export default TwoColObjectFieldTemplate;
