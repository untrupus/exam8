import React, {useState, useEffect} from 'react';
import './QuoteList.css';
import SingleQuote from "../../components/SingleQuote/SingleQuote";
import axiosOrders from "../../axiosOrders";

const QuotesList = () => {
    const [quotes, setQuotes] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/quotes.json');
            const newQuotes = response.data;
            if (newQuotes !== null) {
                setQuotes(newQuotes);
            }
        }
        fetchData().catch(console.error);
    }, []);


    let quoteFeed;
    if (Object.keys(quotes).length === 0) {
        quoteFeed = (
            <h1>Add your first quote...</h1>
        );
    } else {
        const responseData = Object.entries(quotes);
        quoteFeed = responseData.map(quote => (
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
            {quoteFeed}
        </>
    );
};

export default QuotesList;