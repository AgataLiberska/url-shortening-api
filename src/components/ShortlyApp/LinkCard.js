import React from 'react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

import { ButtonCopy, WarningButton } from '../Buttons';
import { LinkListItem, LongLink, ShortLink, LongLinkWrap, ShortLinkWrap, ButtonsContainer, ButtonWrap } from './ShortlyAppElements';

const LinkCard = ({ link, copiedLinks, setCopiedLinks, removeLink }) => {

    const linkId = link.code;
    const linkText = link.full_short_link;

    const { isCopied, copyItem } = useCopyToClipboard(linkId, linkText, copiedLinks, setCopiedLinks);

    return (
        <LinkListItem>
            <LongLinkWrap >
                <LongLink>{link.original_link}</LongLink>
            </LongLinkWrap>
            <ShortLinkWrap>
                <ShortLink>{link.full_short_link}</ShortLink>
                <ButtonsContainer>
                    <ButtonWrap>
                        <WarningButton largeText='false' onClick={() => removeLink(link.code)}>Delete</WarningButton>
                    </ButtonWrap>
                    <ButtonWrap>
                        <ButtonCopy largeText='false' onClick={copyItem} isCopied={isCopied ? 1 : 0}>
                        {isCopied ? 'Copied!' : 'Copy'}
                    </ButtonCopy>
                    </ButtonWrap>
                </ButtonsContainer>
            </ShortLinkWrap>
        </LinkListItem>
    )
}

export default LinkCard;
