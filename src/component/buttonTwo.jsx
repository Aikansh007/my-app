import React from 'react'
import styleswrapper from '../hoc/styleswrapper'
const ButtonTwo=(props)=>{
  return<button style={props.style}>ButtonTwo</button>
}
export default styleswrapper(ButtonTwo);