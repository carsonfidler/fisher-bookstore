import React, { Component } from "react";
import "./recipe.css";
import { RecipeDisplay } from "./RecipeDisplay";


export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipess: [
                {
                    id: 1,
                    recipe: "----",
                    recipe_id: "----"
                },
                {
                    id: 2,
                    recipe: "----",
                    recipe_id: "-----"
                },
                {
                    id: 3,
                    recipe: "sadfs",
                    recipe_id: "3453436"
                },
                {
                    id: 4,
                    recipe: "fdghdh",
                    recipe_id: "634345"
                },
                {
                    id: 5,
                    recipe: "fdhddfh",
                    recipe_id: "345345"
                },
                {
                    id: 6,
                    recipe: "dsfsdf",
                    recipe_id: "3454"
                },
            ]
        };
    }
    render() {
        return (
            <div className="Recipes">
                <div className="lander">
                    <RecipeDisplay recipess={this.state.recipess} />
                </div>
            </div>
        );
}
}
