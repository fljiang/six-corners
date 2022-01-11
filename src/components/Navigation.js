import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {
    Form, 
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { 
    setCorner,
    setInterval,
    setTimer,
    setTotalTime,
    resetAllEvents
 } from "../redux/actions";
 import styled from "styled-components";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.totalTimeRef = React.createRef();
    }

    handleStart = () => {
        const {
            interval,
            totalTime,
            on
        } = this.props;
        const n = Math.floor(totalTime / interval);

        if (on) {
            this.props.resetAllEvents();
            return;
        }
        else {
            this.props.setTimer(true);
        }

        for (let i = 0; i < n; i++) {
            setTimeout(() => {
                const { on } = this.props;
                if (!on) {
                    this.props.resetAllEvents();
                    return;
                }
                const corner = Math.floor((Math.random() * 6) + 1);
                this.props.setCorner(corner);

                // Flash
                setTimeout(() => {
                    this.props.setCorner("");
                }, interval - 250);
            }, interval * i);
        }
        // RESET CORNER AND TIMER TO 0 AFTER COMPLETION
    }

    handleIntervalChange = (interval) => {
        interval = interval * 1000;
        this.props.setInterval(interval);
        this.props.resetAllEvents();
    }

    submitCustomTime = () => {
        if (!this.totalTimeRef) {
            return;
        }
        const totalTime = parseInt(this.totalTimeRef.current.value) * 1000;
        this.props.setTotalTime(totalTime);
        this.forceUpdate();
    }

    render() {
        return(
            <NewContainer>
                <NewNavbar>
                    <Navbar.Brand href="#home">Six Corners</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link onClick={ this.handleStart }>Start</Nav.Link>
                        <NavDropdown title="Intervals">
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(0.5) }>0.5</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(0.6) }>0.6</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(0.7) }>0.7</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(0.8) }>0.8</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(0.9) }>0.9</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1) }>1</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.1) }>1.1</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.2) }>1.2</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.3) }>1.3</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.4) }>1.4</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.5) }>1.5</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.6) }>1.6</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.7) }>1.7</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.8) }>1.8</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(1.9) }>1.9</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.handleIntervalChange(2) }>2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NewFormControl type="text" placeholder="() Seconds" ref={ this.totalTimeRef }/>
                        <SubmitButton onClick={ this.submitCustomTime }>Submit</SubmitButton>
                    </Nav>
                </NewNavbar>
            </NewContainer>
        );
    }
}

const NewContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const NewNavbar = styled(Navbar)`
    width: calc(15px + 100%);
    border-bottom: 2px solid #eee;
`;

const NewFormControl = styled(FormControl)`
    box-sizing: border-box;
    &:hover, &:active, &:focus {
        box-shadow: none;
        border: 1px solid royalblue !important;
    }
    width: 120px;
`;

const SubmitButton = styled(Button)`
    color: royalblue;
    border: 1px solid royalblue !important;
    &:hover, &:active, &:focus {
        background-color: royalblue !important;
        color: white;
    }
    width: 100px;
    margin-left: 5% !important;
    margin-right: 5% !important;
`;

const mapStateToProps = (state) => ({
    interval: state.interval,
    totalTime: state.totalTime,
    on: state.on
});

const mapDispatchToProps = {
    setCorner: setCorner,
    setInterval: setInterval,
    setTimer: setTimer,
    setTotalTime: setTotalTime,
    resetAllEvents: resetAllEvents
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);