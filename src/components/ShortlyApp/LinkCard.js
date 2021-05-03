import React, { useState, useEffect } from 'react';

const LinkCard = ({ link, copiedLinks, setCopiedLinks, removeLink }) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyLink = () => {
        setCopiedLinks(copiedLinks => [...copiedLinks, link.code])
        navigator.clipboard.writeText(link.full_short_link);
    }

    useEffect(() => {
        if (copiedLinks.includes(link.code)) {
            setIsCopied(true)
        } 
    }, [copiedLinks, link.code])

    return (
        <li>
            <p>{link.original_link}</p>
            <p>{link.full_short_link}</p>
            <button onClick={() => removeLink(link.code)}>Delete</button>
            <button onClick={copyLink}>
                {isCopied ? 'Copied!' : 'Copy'}
            </button>

        </li>
    )
}

export default LinkCard;
