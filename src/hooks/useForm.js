import { useState, useEffect } from 'react';
import shortenURL from '../shortenURL';


const useForm = (validate) => {
    const [ url, setUrl ] = useState('');

    const [ error, setError ] = useState({});

    const handleChange = e => {
        setUrl(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setError(validate(url));

        if (!error.message) {
            shortenURL(url);
        }
    }

    return { url, handleChange, handleSubmit, error }
}

export default useForm;