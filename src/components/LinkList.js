import React from 'react';
import LinkCard from './LinkCard';

const LinkList = ({links}) => {

    const renderedLinks = links.map(link => {
        return (
            <LinkCard link={link.result} key={link.code} />
        )
    })
    return (
        <div>
            {renderedLinks}
        </div>
    )
}

export default LinkList
