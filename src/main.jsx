import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ShowAge from './components'
import './index.css'

//Sử dụng object

const person ={
  nam: "Minh",
  age: 20,
  status: true,
  children:[
    {id: "1", name:"Binh"},
    {id: "2", name:"Minh"},
  ]
}
//Sử dụng hàm trong react
const showAge = (age) => <p>Tuổi của bạn là: {age}</p> //20
//Sử dụng component trong react


ReactDOM.render(<div>
 <p>Ten:{person.name}</p>
 <p>Tuoi:{person.age}</p>
 <p>{person.status ? "Da cuoi" : "Chua cuoi"}</p>
 <ul>
   {person.children.map(child => <li>
      {child.name}
   </li>)}
 </ul>
 <div>function: {showAge(person.age)}</div>
 <div>Component: <ShowAge age={person.age} name="Minh"/></div>

  </div>,
  document.querySelector('#root'));