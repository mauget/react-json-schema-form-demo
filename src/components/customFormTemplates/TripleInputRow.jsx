import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p`
`;

const StyledNumberInput = styled.input`
`;

const StyledLabel = styled.label`
    width: 5rem;
`;

const StyledCell = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  margin-right: 0.5rem;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0;
`;

export default function TripleInputRow(props) {
    const {classNames, title, properties} = props;
    console.log('properties', properties);
    return (
        <StyledCell className={classNames}>
            <StyledTitle>{title}</StyledTitle>
            <StyledRow>
                {
                    properties
                    &&
                    Array.isArray(properties)
                    &&
                    properties.map((p) => (
                            <StyledCell>
                                <StyledLabel>{p.name}</StyledLabel>
                                <StyledNumberInput value={p.content.props.formData}/>
                            </StyledCell>
                        )
                    )
                }
            </StyledRow>
        </StyledCell>
    );
}
