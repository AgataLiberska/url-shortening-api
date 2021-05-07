import React from 'react';

import Hero from '../components/Hero';
import ShortlyApp from '../components/ShortlyApp/ShortlyApp';
import InfoSection from '../components/InfoSection';
import CtaSection from '../components/CtaSection';


const Home = () => {


    return (
        <>
            <main>
                <Hero />       
                <ShortlyApp />
                <InfoSection />
                <CtaSection />
            </main>
        </>
    )
}

export default Home;
