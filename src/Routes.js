import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./homes/Home";
import Recipes from "./recipes/recipe";
import Login from "./login/Login";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}