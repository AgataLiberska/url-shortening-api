import React from 'react';

import { ButtonLink } from '../Links';
import {
    HeroContainer, 
    HeroWrap,
    HeroImage,
    HeroContent,
    HeroHeading,
    HeroCopy,
    ButtonLinkWrap
} from './HeroElements';


const Hero = () => {
    return (
        <HeroContainer>
            <HeroWrap>
                <HeroImage />
                <HeroContent>
                    <HeroHeading>More than just shorter links</HeroHeading>
                    <HeroCopy>Build your brand's recognition and get detailed insights on how your links are performing</HeroCopy>
                    <ButtonLinkWrap>
                        <ButtonLink to='/' fontSize='1.25rem' padding='0.875rem 2.5rem 0.75rem'>Get Started</ButtonLink>
                    </ButtonLinkWrap>
                </HeroContent>
            </HeroWrap>
        </HeroContainer>
    );
}

export default Hero;