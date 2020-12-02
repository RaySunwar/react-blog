import React from "react";
import styled from "styled-components";
import { device } from "./mediaQueries";
const { default: Dashboard } = require("./components/dashboard/Dashboard");

const MainWrapper = styled.section`
  width: 100%;
  padding: 0;
  
  @media ${device.lg} {
    padding: 0;
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