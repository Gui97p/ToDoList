import React from 'react';   
import './Form.css';

function Form() {
    return ( 
        <form className="form">
            <input type="text" name="title" id="title" placeholder="Enter title *" />
            <input type="text" name="description" id="description" placeholder="Enter description *" />
            <button type="button">Submit</button>
        </form>
    );
}

export default Form;
