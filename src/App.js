import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import CornerDisplay from "./components/CornerDisplay";
import styled from "styled-components";

class App extends Component {
    render() {
        return (
            <NewContainer id="app">
                <Navigation></Navigation>
                <CornerDisplay></CornerDisplay>
            </NewContainer>
        );
    }
}

const NewContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export default App;
