import React, { Component } from 'react';

class TestingStateComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            phone : [
                {name : 'iphone', series : 'iphone11'},
                {name : 'nokia', series : 'xr'},
                {name : 'samsung', series : 'j7mx'},
                {name : 'huwai', series : 'prime'},
            ]
        }
    }
  
    render()
    {
        return(
            <div>
                <h1>This is { this.state.phone[0].name }</h1>
                <h2>Model is { this.state.phone[1].series }</h2>
                <h3>This is { this.state.phone[2].name }</h3>
                <h4>Model is { this.state.phone[3].series }</h4>
            </div>
        )
    }
}

export default TestingStateComponent;



