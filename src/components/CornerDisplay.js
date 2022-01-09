import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import styled from "styled-components";

class CornerDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {corner} = this.props;

        return (
            <NewContainer id="display">
                <NewButton 
                    sx={{
                        backgroundColor: "whitesmoke",
                        color: "black",
                        fontSize: 250
                    }} 
                >
                    {corner}
                </NewButton>
            </NewContainer>
        )
    }
}

const NewContainer = styled(Container)`
    width: 100%;
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const NewButton= styled(Button)`
    width: 80%;
`;

const mapStateToProps = (state) => ({
    corner: state.corner
});

export default connect(mapStateToProps, null)(CornerDisplay);