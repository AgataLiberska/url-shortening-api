import React, {useState} from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ShortlyApp from '../components/ShortlyApp/ShortlyApp';
import InfoSection from '../components/InfoSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';



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
                <CtaSection />
                <Footer />
            </main>
        </>
    )
}

export default Home;
