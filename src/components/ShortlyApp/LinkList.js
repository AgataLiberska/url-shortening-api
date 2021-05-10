import React, { useState } from 'react';
import LinkCard from './LinkCard';

import { LinkListContainer } from './ShortlyAppElements';

const LinkList = ({results, setResults }) => {
    const [copiedLinks, setCopiedLinks] = useState([]);

    const removeLink = (link) => {
        setResults(results.filter(result => result.result.code !== link));
    }

    const renderedLinks = results.map(result => {
        const link = result.result;

        return (
            <LinkCard 
                key={link.code}
                link={link}
                copiedLinks={copiedLinks} 
                setCopiedLinks={setCopiedLinks}
                removeLink={ removeLink }
            />
        )
    });

    return (
        <LinkListContainer>
            {renderedLinks}
        </LinkListContainer>
    );
}

export default LinkList;
