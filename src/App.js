import logo from './logo.svg';
import './App.css';
import StartPage from "./pages/StartPage";
import React, {useState} from "react";
import InfoPage from "./pages/InfoPage";
import MainMenu from "./pages/MainMenu";

function App() {

    const [state, setState] = useState({
        isStartPage: true,
        isInfoPage: false,
        isMenuPage: false

    })

    return (
        <div>
            <div>
                {state.isStartPage && <StartPage
                    state={state.isStartPage}
                    onChange={(value) => setState({...state, isStartPage: value, isInfoPage: !value})}
                />}
                {state.isInfoPage && <InfoPage
                    state={state.isInfoPage}
                    onExit={(value) => setState({...state, isInfoPage: value, isStartPage: !value})}
                    onMenu={(value) => setState({...state, isInfoPage: value, isMenuPage: !value})}/>
                }
                {state.isMenuPage&&<MainMenu/>

                }

            </div>
        </div>
    );
}

export default App;
