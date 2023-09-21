import React, {useState} from 'react';

import {NewQuoteButtonProps} from './NewQuoteButton.types';

import './Button.scss';


function NewQuoteButton(props: NewQuoteButtonProps) {
    return (
        <button className="new-quote-button" onClick={props.onClick} id="new-quote">New Quote
        </button>
    );
}

export default NewQuoteButton;