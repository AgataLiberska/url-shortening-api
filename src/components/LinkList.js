import React, {useState} from 'react';
import LinkCard from './LinkCard';

const LinkList = ({results}) => {
    const [copiedLinks, setCopiedLinks] = useState([]);

    const renderedLinks = results.map(result => {
        const link = result.result;

        return (
            <LinkCard 
                key={link.code}
                link={link}
                copiedLinks={copiedLinks} 
                setCopiedLinks={setCopiedLinks}
            />
        )
    })

    return (
        <ul>
            {renderedLinks}
        </ul>
    )
}

export default LinkList
