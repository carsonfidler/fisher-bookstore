import React from "react";
import { Card, Button } from "react-bootstrap";

export function RecipeCard(props) {
    return(
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.recipess.recipe}</Card.Title>
                <Card.Text>Recipe: {props.recipess.recipe_id}</Card.Text>
                <Button variant="warning">View Ingredients and Cooking Instructions</Button>
            </Card.Body>
        </Card>
    );
}