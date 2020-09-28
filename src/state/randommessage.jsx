//Parent Component

import React from 'react'
import MessageView from './messageview.jsx'

class RandomMessage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            message:'Hello Universe'
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState()
    {
        let messages=['Hello World','Hello Planet','Hello Universe'];
        let msg = messages[Math.floor(Math.random()*3)];
        this.setState({message:msg});
    }

    render()
    {
        return(
            <div>
                <MessageView message={this.state.message}></MessageView>
                <button onClick={this.updateState}>Update</button>
            </div>
        )
    }
}


export default RandomMessage;