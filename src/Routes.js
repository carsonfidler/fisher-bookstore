import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./homes/Home";
import Books from "./book/Books";
import Authors from "./author/Authors";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/authors" component={Authors} />
        </Switch>
    );
}