import {  } from 'react'

import './App.css'

function App() {

  // let name ="fenil"

  // function fenil(){
  //     return "my name is fenil"
  // }

  // let age=20;

  return (
    <div>
          {/* {name} */}
          {/* {fenil()} */}
          {/* <h1>{age>=18?'drive':'not drive'}</h1> */}
          <h1 style={{
              backgound:
          }}></h1>
    </div>
  )
}

export default App



//embedding  expressions

// const name ="manas kumar lal"
// const element =<h1>hello ,{name}!</h1>

//valid expressions
// variables
// functions
// ternary expressions
// mathematical expressions

//jsx and template  literals  both follow  this rule;only expressions can go inside {} or ${} and not statements
// statement like  if-else ,for etc are not allowed


//jsx with a  array
//jsx doesn't  support  for,but we can use .map()

// const items=["banana","kela","keru"]

// <ul>
//     {items.map((item,index)=>(
//       <li key ={index}>{item}</li>
//     ))}
// </ul>

// jsx rules:

// must a return single parent element .wrap with div (<div></div>) or fragement(<></>)
//