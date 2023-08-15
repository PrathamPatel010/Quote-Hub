const QuoteChoice = () => {
    return(
        <>
        <div className="container text-center">
            <header className="mt-4">
                <h5>Just tap on category to generate quote</h5>
            </header>
        </div>
        <div className="container quote-choice-div text-center">
            <button className="btn btn-secondary">Age</button>
            <button className="btn btn-secondary">Attitude</button>
            <button className="btn btn-secondary">Business</button>
        </div>
        </>
    )
}

export default QuoteChoice;