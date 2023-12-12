import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameContext } from './GameContext'; 
import useInterval from '../hooks/use-interval.hook'; 

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

const App = () => {
    const { setNumCookies, cookiesPerSecond } = useContext(GameContext); 

    useInterval(() => {
      setNumCookies(c => c + cookiesPerSecond);
    }, 1000);

    return (
        <>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
