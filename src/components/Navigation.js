import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";
import { connect } from "react-redux";
import { setCorner } from "../redux/actions";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 3000 
        }
    }

    handleStart = () => {
        const {
            interval
        } = this.state;

        const totalTime = 120000;
        const n = Math.floor(totalTime / interval);

        for (let i = 0; i < n; i++) {
            setTimeout(() => {
                const corner = Math.floor((Math.random() * 6) + 1);
                this.props.setCorner(corner);

                // Flash
                setTimeout(() => {
                    this.props.setCorner("");
                }, interval - 250);
            }, interval * i);
        }
    }

    handleIntervalChange = (n) => {
        console.log(n);
    }

    render() {
        return(
            <Navbar>
                <Navbar.Brand href="#home">Six Corners</Navbar.Brand>
                <Nav.Link onClick={this.handleStart}>Start</Nav.Link>
                <NavDropdown title="Intervals">
                    <NavDropdown.Item onClick={this.handleIntervalChange(0.5)}>0.5</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.handleIntervalChange(0.6)}>0.6</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.handleIntervalChange(0.7)}>0.7</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.handleIntervalChange(0.8)}>0.8</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.handleIntervalChange(0.9)}>0.9</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.handleIntervalChange(1)}>1</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        );
    }
}

const mapDispatchToProps = {
    setCorner: setCorner
};
  
export default connect(null, mapDispatchToProps)(Navigation);