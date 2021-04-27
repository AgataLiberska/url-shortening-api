import React, { useState } from 'react';
import ShortlyForm from './ShortlyForm';
import LinkList from './LinkList';
import shrtcode from '../API/shrtcode';

const ShortlyApp = () => {
    const [ appError, setAppError ] = useState('');
    const [ results, setResults ] = useState([]);

    const submitUrl = async (url) => {
        try {
            setAppError('');
            const {data} = await shrtcode.get('/shorten', { 
                params: {
                    url: url.trim()
                }
            })
            setResults(results => [data, ...results]);

        } catch {
            setAppError('Something went wrong. Check if URL is correct and try again.')
        }

    }

    // use useEffect to save/retrieve from local storage - main function to retrieve and returned function to save

    return (
        <>
            <ShortlyForm onUrlSubmit={submitUrl}/>
            { appError ? <p>{ appError }</p> : null }
            <LinkList links={ results }/>
        </>
    )

}


export default ShortlyApp;