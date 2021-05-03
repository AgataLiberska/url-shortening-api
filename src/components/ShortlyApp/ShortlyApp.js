import React from 'react';
import ShortlyForm from './ShortlyForm';
import LinkList from './LinkList';
import useUrls from '../../hooks/useUrls';


const ShortlyApp = () => {
    const { appError, isLoading, results, submitUrl, setResults } = useUrls();

    return (
        <>
            <ShortlyForm onUrlSubmit={submitUrl}/>
            { appError ? <p>{ appError }</p> : null }
            { isLoading? <p>Loading...</p> : null }
            <LinkList results={ results } setResults={ setResults }/>
        </>
    )

}


export default ShortlyApp;