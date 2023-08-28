import { useState } from "react";
import axios from 'axios';
import ErrorMessage from "./ErrorMessage";
const QuoteChoice = () => {
    // using useState hook for managing state values
    const [quote,setQuote] = useState('Quote will be displayed here');
    const [author,setAuthor] = useState('');
    const [isError,setIsError] = useState(false);   // using this to determing if there is any error
    const [error,setError] = useState('');  // using this as conditional render
    const base_url = import.meta.env.VITE_BACKEND_BASE_URI; // backend base url

    // method that will handle the generation of quote
    const handleGenerate = async(e) => {
        const category = e.target.value;
        const response = await axios.post(`${base_url}/getQuote`,{category});

        // in case of error
        if(response.data.statusCode!=200){
            console.log(response.data.status);
            setQuote('');
            setAuthor('');
            setIsError(true);
            setError(response.data.status);
            return;
        }

        // update the state values
        setIsError(false); 
        setQuote(response.data.quoteData);
        setAuthor(`-${response.data.authorName}`);
    }

    return(
        <>
        <div>
            <div className="btn-container text-center">
                <button className="btn btn-success mx-3 mt-3" onClick={handleGenerate} value='success'>Success</button>
                <button className="btn btn-success mx-3 mt-3" onClick={handleGenerate} value='morning'>Morning</button>
                <button className="btn btn-success mx-3 mt-3" onClick={handleGenerate} value='money'>Money</button>
                <button className="btn btn-success mx-3 mt-3" onClick={handleGenerate} value='love'>Love</button>
                <button className="btn btn-success mx-3 mt-3" onClick={handleGenerate} value='life'>Life</button>
                <button className="btn btn-success mx-3 mt-3" onClick={handleGenerate} value='failure'>Failure</button>
            </div>
        </div>
        <div className="container quoteDiv">
            {/* conditional rendering : if isError true, then only ErrorMessage component will be displayed*/}
            {isError && <ErrorMessage message={error}/>}

            <p className="quote">{quote}</p>
            <p className="author">{author}</p>
        </div>
        </>
    )
}

export default QuoteChoice; 