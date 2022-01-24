import React, {useState} from "react";
import './App.css';
import Intro from "./components/Intro/Intro";
import 'react-toastify/dist/ReactToastify.css';
import {songContext} from "./helpers/contexts"

function App() {
    const [songData, setSongData] = useState({});
    return (
        <div className="App">
            <songContext.Provider value={{songData, setSongData}}>
                <Intro/>
            </songContext.Provider>
        </div>
    );
}

export default App;
