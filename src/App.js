import React from "react";
import styled from "styled-components";
import { device } from "./mediaQueries";
const { default: Dashboard } = require("./components/dashboard/Dashboard");

const MainWrapper = styled.section`
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  
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