import React from "react"; 

const Rating = ({ onClick, value, className }) => {
    return (
        <div>
        <label for="ratings">Rate your book: </label>
        <input type="radio" value="best" name="review" /> 😍
        <input type="radio" value="good" name="review" /> 😊
        <input type="radio" value="okay" name="review" /> 😬
        <input type="radio" value="bad" name="review" /> 😫
        <input type="radio" value="worst" name="review" /> 👎

        </div>
    );
};

export default Rating;