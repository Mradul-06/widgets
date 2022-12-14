import React,{useState} from 'react'
import Accordian from './components/Accordian'
import Search from './components/Search'
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


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

const options=[
  {
    label:'The color Red',
    value:'red'
  },
  {
    label:'The color Green',
    value:'green'
  },
  {
    label:'A shade of Blue',
    value:'blue'
  }
]



const App = () => {
  const [selected,setSelected] = useState(options[0])



return(
  <div>
    <Header/>
    <Route path="/">
      <Accordian items={items}/>
    </Route>

    <Route path="/list">
      <Search/>
    </Route>

    <Route path="/dropdown">
      <Dropdown
      label="Select a Color"
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
      />
    </Route>

    <Route path="/translate">
      <Translate/>
    </Route>

  </div>
)
}

export default App