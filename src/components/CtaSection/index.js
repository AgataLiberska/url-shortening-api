import React from 'react';
import { CtaLink } from '../Links';
import { CtaSectionContainer, CtaSectionWrap, CtaSectionHeading } from './CtaSectionElements';

const CtaSection = () => {
    return (
        <CtaSectionContainer >
            <CtaSectionWrap>
                <CtaSectionHeading>Boost your links today</CtaSectionHeading>
                <CtaLink to='/'>Get Started</CtaLink>
            </CtaSectionWrap>
        </CtaSectionContainer>
    );
};

export default CtaSection;