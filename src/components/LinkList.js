import React from 'react';
import LinkCard from './LinkCard';

const LinkList = ({links}) => {

    const renderedLinks = links.map(link => {
        return (
            <LinkCard link={link.result}/>
        )
    })
    return (
        <div>
            {renderedLinks}
        </div>
    )
}

export default LinkList
