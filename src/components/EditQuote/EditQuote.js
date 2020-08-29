import React, {useEffect, useState} from 'react';
import axiosOrders from "../../axiosOrders";
import Categories from "../../Categories";

const EditQuote = props => {
    const [editQuote, setEditedQuote] = useState({
        author: '',
        category: '',
        text: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosOrders.get('/quotes/' + props.match.params.id + '.json');
            const newQuote = response.data;
            setEditedQuote(newQuote);
        }
        fetchData().catch(console.error);
    }, [props.match.params.id]);

    const quoteChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setEditedQuote(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const saveChanges = async () => {
        const quoteCopy = {...editQuote};
        try {
            if (quoteCopy.text !== '' && quoteCopy.author !== '' && quoteCopy.category !== 'Choose category') {
                const url = '/quotes/' + props.match.params.id + '.json';
                await axiosOrders.put(url, quoteCopy);
                props.history.push({
                    pathname: '/'
                });
            } else {
                alert('Fill in all fields');
            }
        } finally {
            console.log('success');
        }
    };

    const removeQuote = async () => {
        try {
            await axiosOrders.delete('/quotes/' + props.match.params.id + '.json');
        } finally {
            props.history.push({
                pathname: '/'
            });
        }
    };

    const options = Categories.map(category => (
        <option key={category.id} value={category.id}>{category.title}</option>
    ));

    return (
        <div>
            <div className="addQuote">
                <h2>Edit quote</h2>
                <p>Category:</p>
                <select
                    name="category"
                    value={editQuote.category}
                    onChange={quoteChanged}
                >
                    <option defaultChecked={true}>Choose category</option>
                    {options}
                </select>
                <p>Author:</p>
                <input
                    type="text"
                    name="author"
                    value={editQuote.author}
                    onChange={quoteChanged}
                />
                <p>Quote</p>
                <textarea name="text" value={editQuote.text} onChange={quoteChanged}/>
                <br/>
                <button type="button" onClick={saveChanges}>Save</button>
                <button type="button" onClick={removeQuote}>Remove</button>
            </div>
        </div>
    );
};

export default EditQuote;