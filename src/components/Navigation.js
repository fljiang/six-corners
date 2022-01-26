import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {
    FormControl,
    FormGroup,
    Nav,
    Navbar,
} from "react-bootstrap";
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { connect } from "react-redux";
import { 
    setFourCorners,
    setInterval,
    setTime,
    resetAllEvents
} from "../redux/actions";
import styled from "styled-components";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.intervalRef = React.createRef();
        this.timeRef = React.createRef();
    }

    handleFourCorners = () => {
        const { fourCorners } = this.props;
        this.props.setFourCorners(!fourCorners);
        this.props.resetAllEvents();
    }

    handleInterval = () => {
        if (!this.intervalRef) {
            return;
        }

        const interval = (parseFloat(this.intervalRef.current.value) + 1) * 1000 - 1000;
        this.props.setInterval(interval);
        this.props.resetAllEvents();
    }

    handleTime = () => {
        if (!this.timeRef) {
            return;
        }
        
        const time = parseInt(this.timeRef.current.value) * 1000;
        this.props.setTime(time);
        this.props.resetAllEvents();
    }

    render() {
        return(
            <NewContainer>
                <TopNavbar>
                    <Navbar.Brand href="#home">Six Corners</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="toggle">
                        <FormGroup>
                            <ToggleContainer>
                                <LeftTypography>6</LeftTypography>
                                <Switch onChange={ this.handleFourCorners } />
                                <RightTypography>4</RightTypography>
                            </ToggleContainer>
                        </FormGroup>
                    </Nav>
                </TopNavbar>
                <BottomNavbar>
                    <Nav>
                        <IntervalFormControl type="text" placeholder="Interval (s)" ref={ this.intervalRef } onChange={ this.handleInterval } />
                        <TimeFormControl type="text" placeholder="Time (s)" ref={ this.timeRef } onChange={ this.handleTime } />
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

const ToggleContainer = styled(Container)`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const TopNavbar = styled(Navbar)`
    width: 100%;
`;

const BottomNavbar = styled(Navbar)`
    width: 100%;
    border-bottom: 2px solid #eee;
`;

const LeftTypography = styled(Typography)`
    margin-top: 8px !important;
    margin-left: -5px !important;
    margin-right: 5px !important;
`;

const RightTypography = styled(Typography)`
    margin-top: 8px !important;
    margin-left: 5px !important;
`;

const IntervalFormControl = styled(FormControl)`
    box-sizing: border-box;
    &:hover, &:active, &:focus {
        box-shadow: none;
        border: 1px solid royalblue !important;
    }
    width: 105px;
    margin-right: 15px;
`;

const TimeFormControl = styled(FormControl)`
    box-sizing: border-box;
    &:hover, &:active, &:focus {
        box-shadow: none;
        border: 1px solid royalblue !important;
    }
    width: 90px;
    margin-right: 15px;
`;

const mapStateToProps = (state) => ({
    interval: state.interval,
    time: state.time,
    on: state.on,
    fourCorners: state.fourCorners
});

const mapDispatchToProps = {
    setFourCorners,
    setInterval: setInterval,
    setTime: setTime,
    resetAllEvents: resetAllEvents
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);