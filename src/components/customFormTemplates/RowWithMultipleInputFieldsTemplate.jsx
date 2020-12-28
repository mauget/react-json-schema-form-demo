import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 1.3rem;
`;

const StyledNumberInput = styled.input`
  width: 6rem;
  border-radius: 5px;
  background: darkcyan;
  color: white;
  padding: 4px;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
`;

const StyledVerticalCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  margin-right: 0.5rem;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
`;

const getItemName = (item) => (item && item.name) || '';

const getItemValue = (item) =>
    (item && item.content && item.content.props && item.content.props.formData) || '';

const handleChange = () => {};

export default function RowWithMultipleInputFieldsTemplate(props) {
    const { title, properties } = props;
    console.log('properties', properties);
    return (
        <StyledVerticalCard>
            <StyledTitle>{title}</StyledTitle>
            <StyledRow>
                {
                    properties
                    &&
                    Array.isArray(properties)
                    &&
                    properties.map((p) => (
                            <StyledVerticalCard key={getItemName(p)}>
                                <StyledLabel>{getItemName(p)}</StyledLabel>
                                <StyledNumberInput value={getItemValue(p)} onChange={handleChange}/>
                            </StyledVerticalCard>
                        )
                    )
                }
            </StyledRow>
        </StyledVerticalCard>
    );
}
