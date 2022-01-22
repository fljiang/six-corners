import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {
    FormControl,
    FormGroup,
    Nav,
    Navbar,
} from "react-bootstrap";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { 
    setCorner,
    setFourCorners,
    setInterval,
    setTime,
    startTimer,
    resetAllEvents
 } from "../redux/actions";
 import styled from "styled-components";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.intervalRef = React.createRef();
        this.timeRef = React.createRef();
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

    handleFourCorners = () => {
        const { fourCorners } = this.props;
        this.props.setFourCorners(!fourCorners);
    }

    handleSettings = () => {
        if (!this.totalTimeRef && !this.intervalRef) {
            return;
        }

        if (this.intervalRef.current) {
            const interval = parseInt(this.intervalRef.current.value) * 1000
            this.props.setInterval(interval);
        }
        
        if (this.timeRef.current) {
            const time = parseInt(this.timeRef.current.value) * 1000;
            this.props.setTime(time);
        }

        this.props.resetAllEvents();
    }

    render() {
        return(
            <NewContainer>
                <TopNavbar>
                    <Navbar.Brand href="#home">Six Corners</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <NewNavLink onClick={ this.handleStart }>Start</NewNavLink>
                        <NewFormGroup>
                            <FormControlLabel control={<Switch onChange={ this.handleFourCorners }/>} label="4 Corners" />
                        </NewFormGroup>
                    </Nav>
                </TopNavbar>
                <BottomNavbar>
                    <Nav>
                        <NewFormControl type="text" placeholder="Interval (s)" ref={ this.intervalRef }/>
                        <NewFormControl type="text" placeholder="Time (s)" ref={ this.totalTimeRef }/>
                        <SubmitButton onClick={ this.handleSettings }>Submit</SubmitButton>
                    </Nav>
                </BottomNavbar>
            </NewContainer>
        );
    }
}

const NewContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TopNavbar = styled(Navbar)`
    width: 100%;
`;

const BottomNavbar = styled(Navbar)`
    width: 100%;
    margin-top: -15px;
    border-bottom: 2px solid #eee;
`;

const NewNavLink = styled(Nav.Link)`
    margin-right: 15px;
    margin-top: 5px;
`;

const NewFormGroup = styled(FormGroup)`
    margin-top: 5px;
`;

const NewFormControl = styled(FormControl)`
    box-sizing: border-box;
    &:hover, &:active, &:focus {
        box-shadow: none;
        border: 1px solid royalblue !important;
    }
    width: 110px;
    margin-right: 15px;
`;

const SubmitButton = styled(Button)`
    color: royalblue;
    border: 1px solid royalblue !important;
    &:hover, &:active, &:focus {
        background-color: royalblue !important;
        color: white;
    }
    width: 100px;
`;

const mapStateToProps = (state) => ({
    interval: state.interval,
    time: state.time,
    on: state.on,
    fourCorners: state.fourCorners
});

const mapDispatchToProps = {
    setCorner: setCorner,
    setFourCorners,
    setInterval: setInterval,
    setTime: setTime,
    startTimer: startTimer,
    resetAllEvents: resetAllEvents
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);