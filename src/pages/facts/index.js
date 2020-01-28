import React, { Component } from 'react';
import './facts.scss';

class Facts extends Component {

    render(){
        return (
            <>
            <h1 className="header">Facts</h1>
            <div className="facts-container">
                <p>There are 2 types of apples; red and green</p>
                <p>The apple dates back to before the pyramid</p>
                <p>Before apples were discovered, people had a hard time staying on the ground</p>
                <p>Apples are seeds of a larger, "jumbapple"</p>
            </div>
            </>
        )
    }
}

export default Facts;