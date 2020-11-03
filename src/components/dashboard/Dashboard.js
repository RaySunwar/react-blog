import React, { Fragment } from "react";
import Styled from "styled-components";
import Header from "../header/Header";

const Nav = Styled.div`
    background-color: #ffffff;
    margin: 15px;
    padding: 0;
    max-width: 100%;
`;
function Dashboard(){
    return(
        <Fragment>
            <Nav>
                <Header />
            </Nav>
            
        </Fragment>
    );
};

export default Dashboard;