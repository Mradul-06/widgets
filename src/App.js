import React from 'react'
import Accordian from './components/Accordian'

const items =[
{
  title:'What is react?',
  content:'React is a frontend javascript framework'
},
{
  title:'Why use React?',
  content:'React is a favourite Js library among Engineers'  
},
{
  title:'How do you use React?',
  content:'you use react by creating components'
}
]



const App = () => {
  return (
    <div>
        <Accordian items={items}/>
    </div>
  )
}

export default App