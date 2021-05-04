import React, {useState} from 'react';
import Header from '../components/Header';
import HomeMain from '../components/HomeMain';



const Home = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggle = () => {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <Header navOpen={navOpen} toggle={toggle}/>
            <HomeMain />
        </>
    )
}

export default Home;
