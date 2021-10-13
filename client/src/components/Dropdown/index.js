import React from "react"; 

const DropDown = ({ onClick, value, className }) => {
    return (
        <div>
        <label for="ratings">Rate your book: </label>
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Ratings
        </button>
        <ul class="dropdown-menu">
            <li class="dropdown-item">😍</li>
            <li class="dropdown-item">😬</li>
            <li class="dropdown-item">😫</li>
            <li class="dropdown-item">😊</li>
            <li class="dropdown-item">👎</li>
        </ul>
        </div>
    );
};

export default DropDown;