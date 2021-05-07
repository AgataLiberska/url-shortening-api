import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Singup';

import GlobalStyle from './components/GlobalStyle';

const App = () => {

    return (
        <>
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/signup' exact> 
                        <Signup />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;