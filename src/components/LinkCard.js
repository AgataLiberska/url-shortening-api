import React, { useState } from 'react';

const LinkCard = ({link}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyLink = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(link.full_short_link);
    }

    return (
        <div>
            <p>{link.original_link}</p>
            <p>{link.full_short_link}</p>
            <button onClick={copyLink}>
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export default LinkCard;
