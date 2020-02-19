import React, { Component } from "react";
import "./author.css";
import { AuthorDisplay } from "./AuthorDisplay";


export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    author: "Eric Evans",
                    author_id: "193573"
                },
                {
                    id: 2,
                    author: "Nicole Forsgren",
                    author_id: "193253"
                },
                {
                    id: 3,
                    author: "Jim Smith",
                    author_id: "193463"
                },
                {
                    id: 4,
                    author: "Harper Roberts",
                    author_id: "194905"
                },
                {
                    id: 5,
                    author: "Sam Fisher",
                    author_id: "194954"
                },
                {
                    id: 6,
                    author: "Will Chui",
                    author_id: "192309"
                }
            ]
        };
    }
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        );
}
}
