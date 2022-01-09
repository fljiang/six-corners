import React, { Component } from "react";
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
            <NewButton 
                sx={{
                    backgroundColor: "whitesmoke",
                    color: "black",
                    fontSize: 250
                }} 
            >
                {corner}
            </NewButton>
        )
    }
}

const NewButton= styled(Button)`
  width: 80%;
  height: 250px;
`;

const mapStateToProps = (state) => ({
    corner: state.corner
});

export default connect(mapStateToProps, null)(CornerDisplay);