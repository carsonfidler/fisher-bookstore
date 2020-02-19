import React, { Component } from "react";
import "./book.css";
import { BookDisplay } from "./BookDisplay";


export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Agile Framework",
                    author: "Jim Smith",
                    isbn: "978-9304802454"
                },
                {
                    id: 4,
                    title: "RFP Project Management",
                    author: "Harper Roberts",
                    isbn: "978-9404924854"
                },
                {
                    id: 5,
                    title: "Discrete Mathematics 5th Edition",
                    author: "Sam Fisher",
                    isbn: "978-1324598534"
                },
                {
                    id: 6,
                    title: "Physics: Thermodynamics, Mechanical, and Waves 6th Edition",
                    author: "Will Chui",
                    isbn: "978-3455394083"
                }
            ]
        };
    }
    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
}
}
