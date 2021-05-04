import React, {useState} from 'react';
import Header from '../components/Header';

import ShortlyApp from '../components/ShortlyApp/ShortlyApp';

const Home = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggle = () => {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <Header navOpen={navOpen} toggle={toggle}/>
            <ShortlyApp />
        </>
    )
}

export default Home;
