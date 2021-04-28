import React, { useState } from 'react';

const ShortlyForm = ({ onUrlSubmit }) => {
    const [ url, setUrl ] = useState('');
    const [ formError, setFormError ] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!url || !url.trim()) {
            setFormError('Please provide a valid URL')
        } else {
            setFormError('');
            onUrlSubmit(url);
        }

        setUrl('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='url'>Shorten a link here </label>
                <input 
                    type='text'
                    id='url'
                    value={ url }
                    onChange={ e => setUrl(e.target.value) }
                />
                { formError ? <p>{formError}</p> : null }
            </div>
            <button>Submit</button>
        </form>
    )
}

export default ShortlyForm
