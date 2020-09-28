import React from 'react'

class MyComponent extends React.Component
{
    //Mounting State methods

    componentWillMount()
    {
        console.log('Component Will Mount');
    }

    componentDidMount()
    {
        console.log('Component Did Mount');
    }

    //UPDATE STATE METHODS

    componentWillReceiveProps(){
        console.log('component will recieve new prop');
    }

    shouldComponentUpdate(){
        console.log('should component update..');
        return true;
    }
    componentWillUpdate(){
        console.log('component will update');
    }

    componentDidUpdate()
    {
        console.log('component did update');
    }

    //Unmounting state methods

    componentWillUnmount(){
        console.log('clean up taks done before unmount');
    }


    render()
    {
        console.log('Inside render Method.....')
        return(
            <div>
                <h1>State Data {this.props.number}</h1>
            </div>
        )
    }
}

export default MyComponent;