import React from 'react';
import styled from 'styled-components';
import LocationsPanel from './components/LocationsPanel';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.min.css';

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

function App() {
    return (
        <StyledBody>
            <LocationsPanel />
        </StyledBody>
    );
}

export default App;
