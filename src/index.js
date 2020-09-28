import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from './component/greeting'
import Foo from './event/foo'
import MyComponent from './state/mycomp.jsx'
import MyComponent1 from './state/mycomp1.jsx'
import RandomMessage from './state/randommessage'
import ParentComponent from './state/parentComp'
import TestComponent from './LifeCylce/testcomponent'
import GreetUser from './conditionalrendering/conditionrendering'
import Table from './fragment/table'
import Product from './fragment/keyedfragment'



let nm= 'Aikansh';
let a = 24;
//part - 1
// ReactDOM.render(<App />,document.getElementById('root')


// ReactDOM.render(<Greeting name = {nm} age = {a} />,document.getElementById('root'));
//  ReactDOM.render(<App />,document.getElementById('root'));

// ReactDOM.render(<Greeting />,document.getElementById('root'));  // default will work


//part-2
//  ReactDOM.render(<Foo />,document.getElementById('root'));

// ReactDOM.render(<MyComponent />,document.getElementById('root'));   // change state by system

// ReactDOM.render(<MyComponent1 />,document.getElementById('root'));   // change state manually by clicking


//  ReactDOM.render(<RandomMessage />,document.getElementById('root'));

//ReactDOM.render(<ParentComponent />,document.getElementById('root'));

//part - 3

// ReactDOM.render(<TestComponent />,document.getElementById('root'));

// setTimeout(() => {    // for unmounting purpose
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// }, 10000);

 // ReactDOM.render(<GreetUser isloggedin={false} />,document.getElementById('root'));

// ReactDOM.render(<Table />,document.getElementById('root'));

let products = [
  {id:101 , term:"Laptop", description:"Brand Samsung : Price 80000" , price : 300},
  {id:102 , term:"Mobile", description:"Brand Apple : Price 60000" , price : 400}
]


// ReactDOM.render(<Product item = {products} />,document.getElementById('root'));

 ReactDOM.render(<App />,document.getElementById('root'))