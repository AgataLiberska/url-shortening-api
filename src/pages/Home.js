import React, {useState} from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ShortlyApp from '../components/ShortlyApp/ShortlyApp';
import InfoSection from '../components/InfoSection';



const Home = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggle = () => {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <Header navOpen={navOpen} toggle={toggle}/>
            <main>
                <Hero />       
                <ShortlyApp />
                <InfoSection />
            </main>
        </>
    )
}

export default Home;
