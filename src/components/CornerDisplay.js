import React, { Component } from "react";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import styled from "styled-components";

class CornerDisplay extends Component {
    constructor(props) {
        super(props);
    }

    handleStop() {
        console.log("here");
    }

    render() {
        const {
            corner
        } = this.props;

        return (
            <NewButton 
                sx={{
                    backgroundColor: "blue",
                    color: "white",
                    fontSize: 50
                }} 
                onClick={this.handleStop}
            >
                {corner}
            </NewButton>
        )
    }
}

const NewButton= styled(Button)`
  width: 80%;
  height: 100px;
`;

const mapStateToProps = (state) => ({
    corner: state.corner
});

export default connect(mapStateToProps, null)(CornerDisplay);