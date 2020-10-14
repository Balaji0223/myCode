import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import JSON from './NewsData.json';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            news:JSON,
            pageTitle: "My React App",
            filtered:JSON
        }
    }
    filterNews(userInput) {
        let output = this.state.news.filter((item)=> {
            return(item.color.toLowerCase().indexOf(userInput) > -1 || item.value.toLowerCase().indexOf(userInput) > -1 || item.text.toLowerCase().indexOf(userInput) > -1)
        })
        this.setState({filtered: output})
    }
    render() {
        return (
            <React.Fragment>
                <Header newsCallback={(data)=>{this.filterNews(data)}}/>
        <h2>{this.state.pageTitle}</h2>
                <NewsList newsdata={this.state.filtered}></NewsList>
            </React.Fragment>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'))