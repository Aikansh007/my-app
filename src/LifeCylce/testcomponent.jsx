import React from 'react'
import MyComponent from './mycomponent'

class TestComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            data:1
        }
    
    this.changeState = this.changeState.bind(this);
    }

    changeState()
    {
        this.setState({
            data:this.state.data+1
        })
    }

    render()
    {
        return(
            <div>
                <MyComponent number = {this.state.data}></MyComponent>
                <button onClick= {this.changeState}>Increment</button>
            </div>
        )
    }
}

export default TestComponent;