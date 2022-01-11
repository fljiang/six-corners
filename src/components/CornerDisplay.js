import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { resetAllEvents } from "../redux/actions";
import styled from "styled-components";

class CornerDisplay extends Component {
    constructor(props) {
        super(props);
    }

    handleStop = () => {
        this.props.resetAllEvents();
    }


    render() {
        const { corner } = this.props;

        return (
            <NewContainer id="display">
                <NewButton 
                    sx={{
                        backgroundColor: "whitesmoke",
                        color: "black",
                        fontSize: 250
                    }} 
                    onClick={ this.handleStop }
                >
                    {corner}
                </NewButton>
            </NewContainer>
        )
    }
}

const NewContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    background-color: white;
`;

const NewButton= styled(Button)`
    width: 80%;
`;

const mapStateToProps = (state) => ({
    corner: state.corner
});

const mapDispatchToProps = {
    resetAllEvents: resetAllEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(CornerDisplay);