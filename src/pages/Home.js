import React from 'react';
import Hero from '../components/Hero';
import ShortlyApp from '../components/ShortlyApp/ShortlyApp';
import InfoSection from '../components/InfoSection';
import CtaSection from '../components/CtaSection';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {


    return (
        <>
        <Header />
            <main>
                <Hero />       
                <ShortlyApp />
                <InfoSection />
                <CtaSection />
            </main>
        <Footer />
        </>
    )
}

export default Home;
