import { useState } from 'react';
import './App.css';
import {evaluate} from'mathjs';

 
const App = () => {  
  // Holding calculator buttons in an array
  const [sum, outPut] = useState("");

  const buttons = ["7","8", "9", "+",
  "4","5","6","-",
  "1","2","3","*",
  "C","0","/","="];

  // Calculation function making use of evaluate method from mathjs
  const handleClick = (string) => {
    if (string === "=") {
      let expression = sum;
      outPut(evaluate(expression))
    }
    else if (string === "C"){
      outPut("")
    }
    else {
      outPut(sum + string)
    }
  }

// using css for calculator layout
  return (
    <div className='middle'>     
    <div className='disPlay'>{sum}</div>
    <div className='wrappingButtons'>        
      {
        // Function to map through the array of buttons to generate them in the correct order on the web page
        buttons.map ((button, index) => {
          return ( 
            //  when button clicked calculation function performed
            <button key={index} onClick={() => handleClick(button)}>{button}</button>
          )
        })
      }
      </div>
    </div>
  )
}

export default App