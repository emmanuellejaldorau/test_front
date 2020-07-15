import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/";
import "./theme/baseline.css";
import Homepage from 'components/Homepage';

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
  padding: 5px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box>
          <Homepage />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
