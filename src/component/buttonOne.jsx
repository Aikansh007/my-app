// import React from 'react'
// import styleswrapper from '../hoc/styleswrapper'

// const ButtonOne= (props)=>{

//     // return<button>ButtonOne</button>

//     // return<button style={styles.default}>ButtonOne</button>

//     return <button style ={props.style}></button>

//  }

// // export default ButtonOne;

// export default styleswrapper(ButtonOne);   // HOC


import React from 'react'
import styleswrapper from '../hoc/styleswrapper'
const ButtonOne=(props)=>{
  return<button style={props.style}>ButtonOne</button>
}
export default styleswrapper(ButtonOne);