// import React, { useState } from 'react';
// import Quote from './Quote';
// import NewQuoteButton from './NewQuoteButton';

import React, {useState} from "react"
import { QuoteMachineProps } from './QuoteMachine.types'
import Quote from '../Quote/Quote';
import NewQuoteButton from '../NewQuoteButton/NewQuoteButton';
import quotes from "./../../../src/quotes.json";
import "./QuoteMachine.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";



// const QuoteMachine = (props:QuoteMachineProps) =>{
//     return <>{props.name}</>
// }

function QuoteMachine(props: QuoteMachineProps){
    const [quote, setQuote] = useState<string>();
    const [author, setAuthor] = useState<string>();


    const generateQuote = () => {
        //funzione
        const quotesLength = quotes.quotes.length;

        const randomIndex: number = Math.floor(Math.random() * quotesLength);
        
        const randomQuote: string = quotes.quotes[randomIndex].quote;
        const randomAuthor: string = quotes.quotes[randomIndex].author
        setQuote(randomQuote);
        setAuthor(randomAuthor);
        //funzione
    };

    return(
        <div className="quote-machine">
            <h1>Random Quote Machine</h1>
            <Quote text={quote} author={author}/>
            <div className="buttons-wrapper">
                <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank"><button><FontAwesomeIcon icon={faTwitter} /></button></a>
                <NewQuoteButton onClick={()=>{generateQuote()}} />
            </div> 
        </div>
    )
}

export default QuoteMachine;
