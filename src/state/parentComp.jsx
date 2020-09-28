import React from 'react'

import ChildComponent from './childcomp.jsx'

class ParentComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            counter:0
        }
        this.changeState= this.changeState.bind(this);
    }

    changeState()
    {
        {this.setState({counter:this.state.counter+1})}
    }

    render()
    {
        return(
            <div>
                <ChildComponent mycounter={this.state.counter} changeState = {this.changeState}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent;