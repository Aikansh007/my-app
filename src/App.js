import React from 'react'
import Welcome from './component/welcome'
import Greeting from './component/greeting'
import ButtonOne from './component/buttonOne'
import ButtonTwo from './component/buttonTwo'


// const Welcome = props => {   // stateless or functional
//   return <p> Welcome {props.name}</p>
// }

class App extends React.Component  //class &  componnet
{
  render(){
    return(
      <div>
        <h1>Welcome to React</h1>
        
         {/* <Welcome name= { 'Aikansh'}></Welcome> /* //now welcome is component and reusable 
         <Welcome name= { 'Anshu'}></Welcome>
         <Welcome name= { 'Adarsh'}></Welcome>
         <Greeting sub= { 'Maths'}></Greeting> */}


        <ButtonOne></ButtonOne>   {/* HOC */}

        <ButtonOne enable = {'enable'}></ButtonOne>
        <ButtonTwo disable = {'disable'}></ButtonTwo>
             </div>
    )
  }
}
export default App;