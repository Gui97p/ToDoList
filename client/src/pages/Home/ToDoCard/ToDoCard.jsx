import React from 'react';
import PropTypes from  'prop-types';

import { BsCheck2All } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';

import './ToDoCard.css';

function ToDoCard({ title, description }) {
    return ( 
        <div className="to-do_card">
            <div className="texts">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="buttons">
                <button type="button" className="button_check"><BsCheck2All /></button>
                <span></span>
                <button type="button" className="button_remove"><IoIosCloseCircle /></button>
            </div>
        </div>
    );
}

ToDoCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}.isRequired;

export default ToDoCard;
