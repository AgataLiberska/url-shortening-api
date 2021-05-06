import React from 'react';

import InfoCard from './InfoCard';
import { InfoCardOne, InfoCardTwo, InfoCardThree } from './data';
import { InfoSectionContainer, InfoSectionWrapper, InfoHeading, InfoCopy, InfoCardsContainer } from './InfoSectionElements';

const InfoSection = () => {
    return (
        <InfoSectionContainer >
            <InfoSectionWrapper>
                <InfoHeading>Advanced Statistics</InfoHeading>
                <InfoCopy>Track how your links are performing across the web with our advanced statistics dashboard.</InfoCopy>
                <InfoCardsContainer>
                    <InfoCard { ...InfoCardOne }/>
                    <InfoCard { ...InfoCardTwo }/>
                    <InfoCard { ...InfoCardThree }/>
                </InfoCardsContainer>
            </InfoSectionWrapper>
        </InfoSectionContainer>
    );
};

export default InfoSection;
