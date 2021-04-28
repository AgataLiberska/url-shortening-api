import React, { useState, useEffect } from 'react';
import ShortlyForm from './ShortlyForm';
import LinkList from './LinkList';
import shrtcode from '../API/shrtcode';

const useStateWithLocalStorage = localStorageKey => {
    const [ value, setValue ] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || [] );

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value))
    }, [value, localStorageKey]);

    return [value, setValue];
}

const ShortlyApp = () => {
    const [ appError, setAppError ] = useState('');
    const [ results, setResults ] = useStateWithLocalStorage('results');

    const submitUrl = async (url) => {
        try {
            setAppError('');
            const {data} = await shrtcode.get('/shorten', { 
                params: {
                    url: url.trim()
                }
            })

            setResults(results => [data, ...results]);

        } catch (e) {
            setAppError('Something went wrong. Check if URL is correct and try again.')
        }
    }

    return (
        <>
            <ShortlyForm onUrlSubmit={submitUrl}/>
            { appError ? <p>{ appError }</p> : null }
            <LinkList results={ results } setResults={ setResults }/>
        </>
    )

}


export default ShortlyApp;