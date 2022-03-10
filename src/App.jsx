import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components'

function App() {
  const [count, setCount] = useState(0)
  const products =[
    {id: 1, name:"SPA"},
    {id: 2, name:"SPB"},
    {id: 3, name:"SPC"}
  ]

  return (
   <div className="App">
     {products.map(item => <div>{item.name}</div>)}
     <ShowInfo name="Minh" age={29}/>

   </div>
  )
}

export default App
