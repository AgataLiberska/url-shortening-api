import React from 'react';
import { ButtonLink } from '../Links';
import { CtaSectionContainer, CtaSectionWrap, CtaSectionHeading, ButtonLinkWrap } from './CtaSectionElements';

const CtaSection = () => {
    return (
        <CtaSectionContainer >
            <CtaSectionWrap>
                <CtaSectionHeading>Boost your links today</CtaSectionHeading>
                <ButtonLinkWrap>
                    <ButtonLink to='/' padding='0.875rem 2.5rem 0.75rem' fontSize='1.125rem'>Get Started</ButtonLink>
                </ButtonLinkWrap>
            </CtaSectionWrap>
        </CtaSectionContainer>
    );
};

export default CtaSection;