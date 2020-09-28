import React from 'react'

class ChildComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Inside Child Component {this.props.mycounter}</h1>
                <button onClick={this.props.changeState}>Change State</button>
            </div>
        )
    }
}

export default ChildComponent;