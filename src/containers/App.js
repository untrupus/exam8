import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import QuotesList from "./QuotesList/QuotesList";
import AddQuote from "../components/AddQuote/AddQuote";
import EditQuote from "../components/EditQuote/EditQuote";
import QuoteFilter from "./QuoteFilter/QuoteFilter";

function App() {
    return (
        <div className="App">
            <div className="container">
                <BrowserRouter>
                    <Header/>
                    <NavBar/>
                        <div className="quotes">
                            <Switch>
                                <Route path="/" exact component={QuotesList}/>
                                <Route path="/quote-add" component={AddQuote}/>
                                <Route path="/quotes/:category" exact component={QuoteFilter}/>
                                <Route path="/quotes/:id/edit" exact component={EditQuote}/>
                                <Route render={() => <h1>404</h1>}/>
                            </Switch>
                        </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
