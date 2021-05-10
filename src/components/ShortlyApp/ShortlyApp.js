import React from 'react';
import useUrls from '../../hooks/useUrls';

import ShortlyForm from './ShortlyForm';
import LinkList from './LinkList';
import Loader from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import {
    ShortlyAppContainer, ShortlyWrap
} from './ShortlyAppElements';


const ShortlyApp = () => {
    const { appError, isLoading, results, submitUrl, setResults } = useUrls();

    return (
        <ShortlyAppContainer id='try-app'>
            <ShortlyWrap >
                <ShortlyForm onUrlSubmit={submitUrl}/>
                { appError ? <ErrorMessage margin='1rem auto' fontSize='1rem'>{ appError }</ErrorMessage> : null }
                { isLoading? <Loader /> : null }
                <LinkList results={ results } setResults={ setResults }/>
            </ShortlyWrap>
        </ShortlyAppContainer>
    )

}


export default ShortlyApp;