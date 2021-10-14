import React from "react"; 

const Rating = ({ onClick, value, className }) => {
    return (
        <div>
            <label for="ratings">Rate your book: </label>
            <input type="radio" value="5" name="review" /> 😍
            <input type="radio" value="4" name="review" /> 😊
            <input type="radio" value="3" name="review" /> 😬
            <input type="radio" value="2" name="review" /> 😫
            <input type="radio" value="1" name="review" /> 👎
        </div>
    );
};

export default Rating;