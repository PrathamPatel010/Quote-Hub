/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const QuoteChoice = ({onQuoteGenerated}) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const [acknowledgment,setAcknowledgment] = useState('');
    const handleGenerate = async(e) => {
        try{
            const category = e.target.value;
            console.log(category);
            const response = await axios.post(`${backendURL}/getQuote`,{category});
            if(response.data.status){
                setAcknowledgment(response.data.status);
                return;
            }
            setAcknowledgment('');
            onQuoteGenerated(response.data);
        } catch(err){
            console.log(err);
        }
    }
    return(
        <>
        <div className="container text-center">
            <header className="mt-4">
                <h5>Just tap on category to generate quote</h5>
            </header>
            <div className="ack-para">
                <h6>{acknowledgment}</h6>
            </div>
        </div>
        <div className="container quote-choice-div text-center mt-3">
            <button onClick={handleGenerate} value='age' className="btn btn-secondary">Age</button>
            <button onClick={handleGenerate} value='attitude' className="btn btn-secondary">Attitude</button>
            <button onClick={handleGenerate} value='business' className="btn btn-secondary">Business</button>
        </div>
        <div className="container quote-choice-div text-center">
            <button onClick={handleGenerate} value='god' className="btn btn-secondary">God</button>
            <button onClick={handleGenerate} value='love' className="btn btn-secondary">Love</button>
            <button onClick={handleGenerate} value='morning' className="btn btn-secondary">Morning</button>
        </div>
        <div className="container quote-choice-div text-center">
            <button onClick={handleGenerate} value='success' className="btn btn-secondary">Success</button>
            <button onClick={handleGenerate} value='learning' className="btn btn-secondary">Learning</button>
            <button onClick={handleGenerate} value='life' className="btn btn-secondary">Life</button>
        </div>
        </>
    )
}

export default QuoteChoice;