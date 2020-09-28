import React from 'react'

class MyComponent1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"max",
            age:40
        }
        this.updateState = this.updateState.bind(this);   //for binding purpose
        }

    updateState()
        {                   
            this.setState({         //change state manually by clicking
                name:'Rohit',
                age:25
            })
         }

    render()
    {
        
        return(
            <div>
                <h1>Name {this.state.name}</h1>
                <h1>Age {this.state.age}</h1>
                <button onClick={this.updateState}>Update</button>
            </div>
        )
    }
}

export default MyComponent1;