import React,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import QuoteChoice from "./QuoteChoice";

const MainPage = () => {
  const [quote,setQuote] = useState('Quote will be displayed here!');
  const [author,setAuthor] = useState('-author');  
  const handleGenerate = () => {
    setQuote("Sometimes the heart sees what is invisible to the eye.");
    setAuthor("- H. Jackson Brown, Jr.");
  }
  
  return (
    <React.Fragment>
      <Header/>
      <QuoteChoice/>
      <div className="container quote-div px-3 py-2 my-3">
        <p className="quoteElement">{quote}</p>
        <p className="authorname">{author}</p>
      </div>
      <div className="text-center my-4">
        <button onClick={handleGenerate} className="btn btn-primary">Test</button>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default MainPage;