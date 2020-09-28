import React from 'react'
import PropTypes from 'prop-types'

class Greeting extends React.Component{
    render()
    {
        return(
        <div>
            <h1>Name {this.props.name}</h1>
            <h1>Age {this.props.age}</h1>
            {/* <p>Subjects {this.props.sub}</p> */}
           <p>{ function tick() {
                        const element = (
                            <div>
                            <h1>Hello, world!</h1>
                            <h2>It is {new Date().toLocaleTimeString()}.</h2>
                            </div>
                        );
                    }
                   
                }           
            </p>
        </div>
        )
    }
}
Greeting.defaultProps = {
    name:'Default Name',
    age : 12
}
Greeting.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number
}

export default Greeting;