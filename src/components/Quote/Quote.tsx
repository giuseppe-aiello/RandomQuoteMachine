
import React from 'react';

import {QuoteProps} from './Quote.types';

import './Quote.scss';

function Quote(props: QuoteProps) {
    return (
        <div className="quote">
            <h2 id="text">{props.text}</h2>
            <p id="author">cit. {props.author}</p>
        </div>
    );
}

Quote.defaultProps = {
    text: 'Meglio oggi che domani', 
    author: 'Giuseppe'
  };

export default Quote;