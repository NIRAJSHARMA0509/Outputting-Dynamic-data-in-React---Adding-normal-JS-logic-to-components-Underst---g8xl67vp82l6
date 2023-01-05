import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
   const [text, setText] = useState('__');
  
let inputText = "";
  const buttonClickHandler  = ()=> {
    setText(inputText);

  }

  const inputOnChangeHandler = (event) =>{

    inputText = event.target.value;   
    

  }
   return (
    <div id="main">
      <input id='input'   onChange={inputOnChangeHandler}></input>
      <button id='button' onClick={buttonClickHandler}>Click</button>
      <p id='text'> Hello my name is {text} and I study at Newton School</p>
    </div>
  )
}
export default App;
