import { useState } from 'react';
import useStateWithLocalStorage from './useStateWithLocalStorage';
import shrtcode from '../API/shrtcode';

const useUrls = () => {
    const [ appError, setAppError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ results, setResults ] = useStateWithLocalStorage('results');

    const submitUrl = async (url) => {
        setIsLoading(true);
        try {
            setAppError('');
            const {data} = await shrtcode.get('/shorten', { 
                params: {
                    url: url.trim()
                }
            })
            setIsLoading(false);
            setResults(results => [data, ...results]);

        } catch (e) {
            setIsLoading(false);
            setAppError('Something went wrong. Check if URL is correct and try again.')
        }
    }

    return { appError, isLoading, results, submitUrl, setResults };
}

export default useUrls;