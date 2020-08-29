import React, {useState} from 'react';
import './AddQuote.css';
import axiosOrders from "../../axiosOrders";

const AddQuote = props => {
    const [quote, setQuote] = useState({
        author: '',
        category: '',
        text: '',
    });

    const categories = [
        {title: 'Star Wars', id: 'star-wars'},
        {title: 'Famous People', id: 'famous-people'},
        {title: 'Saying', id: 'saying'},
        {title: 'Humour', id: 'humour'},
        {title: 'Motivation', id: 'motivation'},
    ];

    const newQuote = event => {
        const name = event.target.name;
        const value = event.target.value;
        setQuote(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addQuote = async () => {
        const quoteCopy = {...quote};
        if (quote.author !== ''
            && quote.text !== ''
            && (quote.category !== ''
            || quote.category !== 'Choose category')) {
            await axiosOrders.post('/quotes.json', quoteCopy);
            props.history.push({
                pathname: '/'
            });
        } else {
            alert('Fill in all fields');
        }
    };


    return (
        <div className="addQuote">
            <h2>Submit new quote</h2>
            <p>Category:</p>
            <select name="category" onChange={newQuote}>
                <option defaultChecked={true}>Choose category</option>
                <option>Star Wars</option>
                <option>Famous People</option>
                <option>Saying</option>
                <option>humour</option>
                <option>Motivation</option>
            </select>
            <p>Author:</p>
            <input type="text" name="author" onChange={newQuote}/>
            <p>Quote</p>
            <textarea name="text" onChange={newQuote}/>
            <br/>
            <button type="button" onClick={addQuote}>Save</button>
        </div>
    );
};

export default AddQuote;