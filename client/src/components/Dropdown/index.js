import React from "react"; 

const DropDown = ({ onClick, value, className }) => {
    return (
        <div>
        <label for="ratings">Rate your book: </label>
        <select name="ratings" id="ratings">
            <option value="must-read">Must Read!</option>
            <option value="good">Pretty good</option>
            <option value="average">Average</option>
            <option value="bad">Bad</option>
            <option value="wouldnt-recommend">Would not recommed</option>
        </select>
        </div>
    );
};

export default DropDown;