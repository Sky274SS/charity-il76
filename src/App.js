import logo from './logo.svg';
import './App.css';
import StartPage from "./pages/StartPage";
import React,{useState} from "react";
import InfoPage from "./pages/InfoPage";

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
       {state.isInfoPage&&<InfoPage
       state={state.isInfoPage}
       onExit={(value)=> setState({...state, isInfoPage:value,isStartPage:!value})}/>}
       </div>
   </div>
  );
}

export default App;
