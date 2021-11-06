import logo from './logo.svg';
import './App.css';
import StartPage from "./pages/StartPage";
import React,{useState} from "react";

function App() {

    const [state, setState] = useState({
        isStartPage:true,
        isInfoPage:false

    })

  return (
   <div>
       <div>
       {state.isStartPage && <StartPage
           state={state.isStartPage}
           onChange={(value) => setState({...state, isStartPage:value,isInfoPage:!value})}
       />}
       {state.isInfoPage&&<div>work</div>}
       </div>
   </div>
  );
}

export default App;
