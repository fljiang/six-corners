import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";
import { connect } from "react-redux";
import { 
    setCorner,
    setInterval,
    setTimer
 } from "../redux/actions";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    handleStart = () => {
        const {
            interval,
            on
        } = this.props;
        const totalTime = 120000;
        const n = Math.floor(totalTime / interval);

        if (on) {
            this.resetAllEvents();
            return;
        }
        else {
            this.props.setTimer(true);
        }

        for (let i = 0; i < n; i++) {
            setTimeout(() => {
                const {on} = this.props;
                if (!on) {
                    this.resetAllEvents();
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
    }

    handleIntervalChange = (interval) => {
        interval = interval * 1000;
        this.props.setInterval(interval);
        this.resetAllEvents();
    }

    resetAllEvents() {
        const highestTimeoutId = setTimeout(";");
        for (let i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
        this.props.setCorner(0);
        this.props.setTimer(false);
    }

    render() {
        return(
            <Navbar>
                <Navbar.Brand href="#home">Six Corners</Navbar.Brand>
                <Nav.Link onClick={this.handleStart}>Start</Nav.Link>
                <NavDropdown title="Intervals">
                    <NavDropdown.Item onClick={() =>this.handleIntervalChange(0.5)}>0.5</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(0.6)}>0.6</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(0.7)}>0.7</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(0.8)}>0.8</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(0.9)}>0.9</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1)}>1</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.1)}>1.1</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.2)}>1.2</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.3)}>1.3</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.4)}>1.4</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.5)}>1.5</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.6)}>1.6</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.7)}>1.7</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.8)}>1.8</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(1.9)}>1.9</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.handleIntervalChange(2)}>2</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    interval: state.interval,
    on: state.on
});

const mapDispatchToProps = {
    setCorner: setCorner,
    setInterval: setInterval,
    setTimer, setTimer
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);