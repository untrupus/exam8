import React, {useEffect, useState} from 'react';
import axiosOrders from "../../axiosOrders";
import SingleQuote from "../../components/SingleQuote/SingleQuote";

const QuoteFilter = props => {
    const [quotesFilter, setQuotesFilter] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response =
                await axiosOrders
                    .get('/quotes.json?orderBy="category"&equalTo="' + props.match.params.category + '"');
            const newQuotes = response.data;
            if (newQuotes !== null) {
                setQuotesFilter(newQuotes);
            }
        }
        fetchData().catch(console.error);
    }, [props.match.params.category]);


    let filteredQuote;
    if (Object.keys(quotesFilter).length === 0) {
        filteredQuote = (
            <h1>Add your first quote...</h1>
        );
    } else {
        const responseData = Object.entries(quotesFilter);
        filteredQuote = responseData.map(quote => (
                <SingleQuote
                    key={quote[0]}
                    author={quote[1].author}
                    id={quote[0]}
                    text={quote[1].text}
                />
            )
        );
    }
    return (
        <>
            {filteredQuote}
        </>
    );
};

export default QuoteFilter;