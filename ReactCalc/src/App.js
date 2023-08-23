import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('')
  const numberList = [0,1,2,3,4,5,6,7,8,9]
  const [operation, setOperation] = useState('')
  const operations = 
    [
      {
    'id': 0,
    'value': '+'
  },
  {
    'id': 1,
    'value': '-'
  },
  {
    'id': 2,
    'value': '*'
  },
  {
    'id': 3,
    'value': '/'
  }
]
  
function HandleButton (e){
  //valueInput.push(e.target.value)
  setResult(result.concat(e.target.value))
}

  function DisplayInput(e){
   const array = []
   const regex = new RegExp("[/*-+]")
   console.log(result.match(regex))
   setOperation(result.match(regex))
   array.push([result.substring(0, result.match(regex).index)])
  array.push([result.substring(result.match(regex).index+1,result.length)])
  var res = array[0]+array[1]
  if (operation == '+')
  {
    res = parseInt(array[0])+parseInt(array[1])
  }
  else if (operation == '*')
  {
    res = parseInt(array[0])*parseInt(array[1])
  }
  else if (operation == '/')
  {
    res = parseFloat( parseInt(array[0])/parseInt(array[1]))
  }
  // Doesn't currently work
  else if (operation == '-')
  {
    res = parseInt(array[0])-parseInt(array[1])
  }
  
  alert(res)
  setResult('')
  }

  function DisplayCalculator() {
    return (
      numberList.map(num=>{
        return (<button key={num} value={num} onClick={HandleButton} className={'b'.concat(num)}> {num}</button>)
      })
      )
    }
      
    function DisplayOperations() {
      return (
        operations.map((val)=>{return(<button value={val.value} key={val.key} onClick={HandleButton} className={'o'.concat(val.id)}>{val.value}</button>)}))
        }


  return (
    <div className="App">
      <h1> DisplayCalculator</h1>
      <input className='displayResult' type="text" value={result}></input>
     <DisplayCalculator></DisplayCalculator>
      <DisplayOperations></DisplayOperations>
      <button className='equalSign' onClick={DisplayInput}>=</button>
    </div>
  );
}

export default App;
