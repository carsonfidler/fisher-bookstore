import React from "react";
import { RecipeCard } from "./RecipeCard";
import { CardColumns } from "react-bootstrap";

export function RecipeDisplay(props) {
    return (
        <div className="display">
            <h3>Recipes</h3>
            <CardColumns>
                {props.recipess.map(a => (
                    <RecipeCard recipe={a} key={a.id}  />
                ))}
            </CardColumns>
        </div>
    );
}