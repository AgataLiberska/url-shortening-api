import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import GlobalStyle from './components/GlobalStyle';

const App = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggle = () => {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <Router>
                <GlobalStyle />
                <Header navOpen={navOpen} toggle={toggle}/>
                <Switch>
                    <Route path='/' component={Home}/> 
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;