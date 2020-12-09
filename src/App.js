import React from "react";
import styled from "styled-components";
import breakpoints from "./mediaQueries";
const { default: Dashboard } = require("./components/dashboard/Dashboard");

const MainWrapper = styled.section`
  padding: 0;
  width: 100%;

  @media ${breakpoints.Tablet}{
    max-width: 768px;
  }
  
  @media ${breakpoints.Desktop} {
    padding: 0;
    max-width: 1200px;
  }
`;

function App() {
  
  return (
    <MainWrapper>
      <Dashboard />
    </MainWrapper>
  );  
};
 
export default App;