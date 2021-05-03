import React from 'react';
import ShortlyApp from './components/ShortlyApp/ShortlyApp';

import GlobalStyle from './components/GlobalStyle';

const App = () => {
    return (
        <>
        <GlobalStyle />
        <h1>Shortly</h1>
        <ShortlyApp />
        </>
    )
}

export default App;