import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/survey/:questionNumber">
                    <Survey />
                </Route>
                <Route path="/profils">
                    <Freelances />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
