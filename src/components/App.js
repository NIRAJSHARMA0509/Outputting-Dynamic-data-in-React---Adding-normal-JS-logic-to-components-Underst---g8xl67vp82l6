import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
  const[name,setName]=useState('');
  const [copyName,setCopyName]=useState(false);
  const doname=(e)=>{
    setName(e.target.value);
  }
  
   const click=()=>{
	setCopyName(true);
   }
  return (
    <div id="main">
      <input type="text"  value={name} onChange={doname}></input>
      <button id='button' onClick={click}>Click</button>
	  {copyName ? <p id='text'>Hello my name is {name} and I study at Newton School</p> :
    <p id='text'>Hello my name is ____ and I study at Newton School</p>
	}
    </div>
  )
}
