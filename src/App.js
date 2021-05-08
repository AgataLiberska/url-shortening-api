import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

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
                </Switch>
            </Router>
        </>
    )
}

export default App;