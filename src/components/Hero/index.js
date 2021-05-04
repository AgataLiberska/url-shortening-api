import React from 'react';


import {
    HeroContainer, 
    HeroWrap,
    HeroImage,
    HeroContent,
    HeroHeading,
    HeroCopy, 
    HeroCTA
} from './HeroElements';


const Hero = () => {
    return (
        <HeroContainer>
            <HeroWrap>
                <HeroImage />
                <HeroContent>
                    <HeroHeading>More than just shorter links</HeroHeading>
                    <HeroCopy>Build your brand's recognition and get detailed insights on how your links are performing</HeroCopy>
                    <HeroCTA to='/signup'>Get Started</HeroCTA>
                </HeroContent>
            </HeroWrap>
        </HeroContainer>
    );
}

export default Hero;