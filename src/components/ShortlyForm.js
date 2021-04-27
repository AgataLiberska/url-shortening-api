import React from 'react'
import useForm from '../hooks/useForm';
import validate from '../validateForm';

const ShortlyForm = () => {
    const { url, handleChange, handleSubmit, error } = useForm(validate);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='url'></label>
                <input 
                    type='text'
                    id='url'
                    value={url}
                    onChange={handleChange}
                />
                { error.message && <p>{ error.message }</p> }
            </div>
            <button>Submit</button>
        </form>
    )
}

export default ShortlyForm
