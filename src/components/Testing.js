import React, { Component } from 'react';

class Testing extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <h1>This is {this.props.name}</h1>
    }
}

export default Testing;
