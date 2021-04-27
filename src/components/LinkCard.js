import React from 'react';

const LinkCard = ({link}) => {
    return (
        <div>
            <p>{link.original_link}</p>
            <p>{link.full_short_link}</p>
        </div>
    )
}

export default LinkCard;
