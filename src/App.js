import React from 'react';
import styled from 'styled-components';
import {LocationsPanel} from "./components/LocationsPanel";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
    return (
        <StyledBody>
            <LocationsPanel/>
        </StyledBody>
    );
}

export default App;
