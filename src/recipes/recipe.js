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
                    recipe: "Eric Evans",
                    recipe_id: "193573"
                },
                {
                    id: 2,
                    recipe: "Eric Evans",
                    recipe_id: "193573"
                },
                {
                    id: 3,
                    recipe: "Eric Evans",
                    recipe_id: "193573"
                },
                {
                    id: 4,
                    recipe: "Eric Evans",
                    recipe_id: "193573"
                },
                {
                    id: 5,
                    recipe: "Eric Evans",
                    recipe_id: "193573"
                },
                {
                    id: 6,
                    recipe: "Eric Evans",
                    recipe_id: "193573"
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
