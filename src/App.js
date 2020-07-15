import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/";
import "./theme/baseline.css";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from 'components/Homepage';
import MuseumDetails from 'components/MuseumDetails';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  max-width: 1280px;
  margin: auto;
`

const Box = styled.div`
  border-radius: 5px;
  background: #e7e7e7;
  white-space: pre-line;
  padding: 15px 5px;
`

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Container>
        <Box>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/museums/:museumId" component={MuseumDetails} />
          </Switch>
        </Box>
      </Container>
    </ThemeProvider>    
    </BrowserRouter>
  );
}

export default App;
