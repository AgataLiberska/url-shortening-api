import React from 'react';
import ShortlyForm from './ShortlyForm';
import LinkList from './LinkList';
import useUrls from '../../hooks/useUrls';

import {
    ShortlyAppContainer, ShortlyWrap
} from './ShortlyAppElements';


const ShortlyApp = () => {
    const { appError, isLoading, results, submitUrl, setResults } = useUrls();

    return (
        <ShortlyAppContainer id='try-app'>
            <ShortlyWrap>
                <ShortlyForm onUrlSubmit={submitUrl}/>
                { appError ? <p>{ appError }</p> : null }
                { isLoading? <p>Loading...</p> : null }
                <LinkList results={ results } setResults={ setResults }/>
            </ShortlyWrap>
        </ShortlyAppContainer>
    )

}


export default ShortlyApp;