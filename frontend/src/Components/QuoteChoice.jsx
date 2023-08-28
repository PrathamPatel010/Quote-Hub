import { useState } from "react";

const QuoteChoice = () => {
    const [quote,setQuote] = useState('');
    const [author,setAuthor] = useState('');

    const handleGenerate = async(e) => {
        console.log(e.target.value);
        setQuote("When love beckons to you, follow him, Though his ways are hard and steep. And when his wings enfold you yield to him, Though the sword hidden among his pinions may wound you.");
        setAuthor("-Khalil Gibran");
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
            <p className="quote">{quote}</p>
            <p className="author">{author}</p>
        </div>
        </>
    )
}

export default QuoteChoice; 