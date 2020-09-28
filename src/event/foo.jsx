import React from 'react'

class Foo extends React.Component
{

    constructor(props)
    {
        super(props);
        this.age=40;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log('clicked........');
        console.log('Bind by Const ,value of age '+this.age);
    }

    handleClick1=()=>
    {
        console.log('clicked........');
        console.log('Bind by Arrow function ,value of age '+this.age);
    }
    handleClick2=(eid, name,event)=>
    {
        console.log('clicked........');
        console.log('Parameter passed... '+eid+' '+name);
        console.log('Event type '+event.type);
    }


    render()
    {
        return(
            <div>

                <button onClick ={this.handleClick}>Bind by Const</button>
                <button onClick ={this.handleClick1}>Bind by Arrow Function</button>
                <button onClick ={(event)=>this.handleClick2(101,'Ravic',event)}>Parameter Pass</button>
            </div>

        )
    }
}

export default Foo;