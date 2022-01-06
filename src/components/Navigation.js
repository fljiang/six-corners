import React, { Component } from "react";
import {
    Nav,
    Navbar
} from "react-bootstrap";
import { connect } from "react-redux";
import { setCorner } from "../redux/actions";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inc: 3000 
        }
    }

    handleStart = () => {
        const {
            inc
        } = this.state;

        const totalTime = 120000;
        const n = Math.floor(totalTime / inc);

        for (let i = 0; i < n; i++) {
            setTimeout(() => {
                const corner = Math.floor((Math.random() * 6) + 1);
                this.props.setCorner(corner);
                console.log(corner);
            }, inc * i);
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

const mapDispatchToProps = {
    setCorner: setCorner
};
  
export default connect(null, mapDispatchToProps)(Navigation);