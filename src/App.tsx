import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from "./Main";
interface AppProps {
    isB24Available: boolean;
}

function App({ isB24Available }: AppProps) {
    return (
        <Router basename="/b24/ui">
            <div className="App">
                <Main isB24Available={isB24Available} />
            </div>
        </Router>
    );
}

export default App;




