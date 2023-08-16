/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import QuoteChoice from "./QuoteChoice";

const MainPage = () => {
  const [quote,setQuote] = useState('Quote will be displayed here!');
  const [author,setAuthor] = useState('author');  
  const handleGenerate = (data) => {
    setQuote(data.quoteData);
    setAuthor(data.authorName);
  };
  
  return (
    <React.Fragment>
      <Header/>
      <QuoteChoice onQuoteGenerated={handleGenerate}/>
      <div className="container quote-div px-3 py-2 my-3">
        <p className="quoteElement">{quote}</p>
        <p className="authorname">-{author}</p>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default MainPage;