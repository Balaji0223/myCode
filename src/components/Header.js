import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keywords: "Search for your favourite"
        }
    }
    inputChange(event) {
        this.setState({keywords: 'You are Searching for "' + event.target.value + '"'});
        if(event.target.value === "") {
            this.setState({keywords: "Search for your favourite"});
        }
        this.props.newsCallback(event.target.value);
    }
    render() {
        // Inline styles
        const myStyles = {
            header: {
                background: "teal"
            },
            h1: {
                color: "#fff",
                fontSize: "30px",
                padding: "20px 0 0",
                margin: "0"
            },
            displayInput: {
                color: "#fff",
                fontSize: "20px",
                paddingBottom: "20px",
                margin: "10px 0 0"
            },
            searchInput: {
                width: "280px",
                padding: "0 0 0 10px",
                height: "35px"
            }
        }
        return(
            <header style={myStyles.header}>
                <center>
                <h1 style={myStyles.h1}>My React Logo</h1>
                <input type="text" style={myStyles.searchInput} onChange={this.inputChange.bind(this)}/>
                <p style={myStyles.displayInput}>{this.state.keywords}</p>
                </center>
            </header>
        )
    }
}

export default Header