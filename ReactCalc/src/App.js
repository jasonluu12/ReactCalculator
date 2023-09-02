import './App.css';
import { useState } from 'react';

function App() {
  const displayResult = {
    top: '200px',
    left: '80px',
  }
  const [input, setInput] = useState('') // Handles user input 
  const numberList = [0,1,2,3,4,5,6,7,8,9] // Handles buttons 0-9
  const [result, setResult] = useState(0) // Handles the result of the calculation
  const operations = [
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

// Function to add the total input together
function HandleButton (e){
  setInput(input.concat(e.target.value))
}

// Function to take in the user's input such as "5+34" then uses regex to find the operation and seperate the numbers
// into an array
  function ParseInput(e){
   const inputArray = []
   const regex = new RegExp("[/*+-]{1}")
   const operation = input.match(regex)
   inputArray.push([input.substring(0, operation.index)])
   inputArray.push([input.substring(operation.index+1,input.length)])
   var res = 0

    if (operation == '+')
  {
    res = parseInt(inputArray[0])+parseInt(inputArray[1])
  }
  else if (operation == '*')
  {
    res = parseInt(inputArray[0])*parseInt(inputArray[1])
  }
  else if (operation == '/')
  {
    res = parseFloat( parseInt(inputArray[0])/parseInt(inputArray[1]))
  }
  // Doesn't currently work
  else
  {
    res = parseInt(inputArray[0])-parseInt(inputArray[1])
  }
  setResult(res)
  setInput('')
  
  }


// Displays buttons 0-9
  function DisplayCalculator() {
    return (
      numberList.map(num=>{
        return (<button key={num} value={num} onClick={HandleButton} className={'b'.concat(num)}> {num}</button>)
      })
    )
    }
      
    // Displays +/-* (The operations of a calculator)
  function DisplayOperations() {
    return (
      operations.map((val)=>{return(<button value={val.value} key={val.key} onClick={HandleButton} className={'o'.concat(val.id)}>{val.value}</button>)}))
      }


  return (
    <div className="App">
      <h1> DisplayCalculator</h1>
      <input className='displayInput' type="text" value={input}></input>
      <DisplayCalculator></DisplayCalculator>
      <DisplayOperations></DisplayOperations>
      <button className='equalSign' onClick={ParseInput}>=</button>
      <input type='text' value={result}></input>

      
    </div>
  );
}

export default App;
