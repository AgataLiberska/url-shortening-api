import React from 'react';
import { InfoCardWrap, InfoIcon, InfoIconWrap, InfoCardHeading, InfoCardCopy } from './InfoSectionElements';

const InfoCard = ({ img, heading, copy }) => {
    return (
        <InfoCardWrap>
            <InfoIconWrap>
                <InfoIcon src={img} alt='' />
            </InfoIconWrap>
            <InfoCardHeading>
                { heading }
            </InfoCardHeading>
            <InfoCardCopy>
                { copy }
            </InfoCardCopy>
        </InfoCardWrap>
    );
};

export default InfoCard;
