import React, { Component } from "react";
import Button from '@mui/material/Button';
import styled from "styled-components";

class CornerDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            corner: 0,
        }
    }

    render() {
        const {
            corner
        } = this.state;

        return (
            <NewButton sx={{ backgroundColor: 'blue' }}>corner</NewButton>
        )
    }
}

const NewButton= styled(Button)`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export default CornerDisplay