import React from 'react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

const LinkCard = ({ link, copiedLinks, setCopiedLinks, removeLink }) => {

    const linkId = link.code;
    const linkText = link.full_short_link;

    const { isCopied, copyItem } = useCopyToClipboard(linkId, linkText, copiedLinks, setCopiedLinks);

    return (
        <li>
            <p>{link.original_link}</p>
            <p>{link.full_short_link}</p>
            <button onClick={() => removeLink(link.code)}>Delete</button>
            <button onClick={copyItem}>
                {isCopied ? 'Copied!' : 'Copy'}
            </button>

        </li>
    )
}

export default LinkCard;
