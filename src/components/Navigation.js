import React, { Component } from "react";
import {
    Nav,
    Navbar
} from "react-bootstrap";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            inc: 0 
        }
    }

    handleStart = () => {
        for (let i = 1; i < 100; i++) {
            setTimeout(() => {
                let corner = Math.floor((Math.random() * 6) + 1);
                // this.props.setCounter(counter);
                console.log(corner);
            }, 3000 * i);
        }
    }

    render() {
        return(
            <Navbar>
                <Navbar.Brand href="#home">Six Corners</Navbar.Brand>
                <Nav.Link onClick={this.handleStart}>Start</Nav.Link>
            </Navbar>
        );
    }
}

export default Navigation;