import React, {useState} from "react";
import './App.css';
import Intro from "./components/Intro/Intro";
import 'react-toastify/dist/ReactToastify.css';
import {songContext} from "./helpers/contexts"
import Result from "./components/Result/Result";

function App() {
    const [songData, setSongData] = useState({});
    const [navigator, setNavigator] = useState("intro");
    return (
        <div className="App">
            <songContext.Provider value={{songData, setSongData, navigator, setNavigator}}>
                {navigator === "intro" && <Intro/>}
                {navigator === "result" && <Result/>}
            </songContext.Provider>
        </div>
    );
}

export default App;
