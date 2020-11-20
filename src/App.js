import React from "react";
import styled from "styled-components";
const { default: Dashboard } = require("./components/dashboard/Dashboard");

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
`;

function App() {
  return (
    <MainWrapper>
      <Dashboard />
    </MainWrapper>
  );
};

export default App;
