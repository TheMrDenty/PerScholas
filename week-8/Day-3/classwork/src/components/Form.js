import React, { useState } from 'react'

function Form(props) {
    // state to hold our forms data
    const [formData, setFormData] = useState({
        searchterm: '',
    });

    // handle change - updates formData when we type into form
    const handleChange = (event) => {
        // use the event object to detect and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        // prevent page from refreshing on form submission
        event.preventDefault();
        // pass the search term to movieSearch prop, which is apps getMovie function
        props.movieSearch(formData.searchterm);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='searchterm'
                onChange={handleChange}
                value={formData.searchTerm}
            />
            <input 
                type='submit' 
                value='submit'
            />
        </form>
    </div>
  )
}

export default Form