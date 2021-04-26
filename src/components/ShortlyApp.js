import React, {useState} from 'react';
import shrtcode from '../API/shrtcode';

const ShortlyApp = () => {

    const [ url, setUrl ] = useState('');
    const [ results, setResults ] = useState([]);

    const shortenURL = async (e) => {
        e.preventDefault();

        const { data } = await shrtcode.get('/shorten', { 
            params: {
                url: url.trim()
            }
        })

        setResults( results => [data, ...results]);
    }

    console.log(results);

    return (
        <form onSubmit={shortenURL}>
            <input 
                type="text"
                value={url}
                onChange={e => setUrl(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )

}


export default ShortlyApp;