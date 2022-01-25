import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { 
    setCorner,
    startTimer,
    resetAllEvents
} from "../redux/actions";
import styled from "styled-components";

class CornerDisplay extends Component {
    constructor(props) {
        super(props);
    }

    handleStart = () => {
        const {
            interval,
            time,
            on,
            fourCorners
        } = this.props;
        const n = Math.floor(time / interval);

        if (on) {
            this.props.resetAllEvents();
            return;
        }
        else {
            this.props.startTimer(true);
        }

        for (let i = 0; i < n; i++) {
            setTimeout(() => {
                const { on } = this.props;
                if (!on) {
                    this.props.resetAllEvents();
                    return;
                }
                
                if (!fourCorners) {
                    const corner = Math.floor((Math.random() * 6) + 1);
                    this.props.setCorner(corner);
                }
                else {
                    const corners = {
                        1: 1,
                        2: 2,
                        3: 5,
                        4: 6
                    }
                    const corner = Math.floor((Math.random() * 4) + 1);
                    this.props.setCorner(corners[corner]);
                }

                // Flash
                setTimeout(() => {
                    this.props.setCorner("");
                    if (i === n - 1) {
                        this.props.resetAllEvents();
                    }
                }, interval - 250);
            }, interval * i);
        }
    }

    render() {
        const { corner } = this.props;
        let button;
        if (corner == "start") {
            button = <NewButton 
                sx={{
                    backgroundColor: "whitesmoke",
                    color: "black",
                    fontSize: 100
                }} 
                onClick={ this.handleStart }
            >
                {corner}
            </NewButton>
        }
        else {
            button = button = <NewButton 
                sx={{
                    backgroundColor: "whitesmoke",
                    color: "black",
                    fontSize: 250
                }} 
                onClick={ this.handleStart }
            >
                {corner}
            </NewButton>
        }

        return (
            <NewContainer id="display">
                { button }
            </NewContainer>
        )
    }
}

const NewContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 15px;
`;

const NewButton= styled(Button)`
    width: 100%;
    height: 500px;
`;

const mapStateToProps = (state) => ({
    corner: state.corner,
    interval: state.interval,
    time: state.time,
    on: state.on,
    fourCorners: state.fourCorners
});

const mapDispatchToProps = {
    setCorner: setCorner,
    startTimer: startTimer,
    resetAllEvents: resetAllEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(CornerDisplay);