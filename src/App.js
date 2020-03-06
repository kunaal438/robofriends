import React, { Component } from 'react';
import { robots } from './robots';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './app.css';

class App extends Component{

    constructor() {
        super();
        this.state = {
            robots : robots,
            searchFeild : "",
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchFeild : event.target.value })
        // console.log(filteredRobot);
    }

    render() {
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1 code white">Robofriends</h1>
                <Searchbox searchchange={this.onSearchChange}/>
                <Cardlist robots={filteredRobot}/>
            </div>
        )
    }
    
}

export default App;