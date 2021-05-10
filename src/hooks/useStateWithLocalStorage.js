import {useState, useEffect } from 'react';

const useStateWithLocalStorage = localStorageKey => {
    const [ value, setValue ] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || [] );

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value))
    }, [value, localStorageKey]);

    return [value, setValue];
}

export default useStateWithLocalStorage;