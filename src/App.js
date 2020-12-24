import React from 'react';
import styled from 'styled-components';
import {LocationsPanel} from "./components/LocationsPanel";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: #282c34;
  min-height: 100vh;
  min-width: 100vw;
  font-size: calc(10px + 2vmin);
  //color: white;
`;

function App() {
    return (
        <StyledBody>
            <LocationsPanel/>
        </StyledBody>
    );
}

export default App;
