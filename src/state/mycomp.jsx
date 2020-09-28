import React from 'react'

class MyComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"max",
            age:40
        }
    }

    render()
    {
        setTimeout(() => {          // this will change state after 5 sec by the system
            this.setState({name:'Aikansh',age:24})
        }, 5000);
        return(
            <div>
                <h1>Name {this.state.name}</h1>
                <h1>Age {this.state.age}</h1>
            </div>
        )
    }
}

export default MyComponent;