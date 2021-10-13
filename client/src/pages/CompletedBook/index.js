import React from "react";
import { BookCard } from "../../components";
import DropDown from "../../components/Dropdown";
import { Books } from "../../components";


const CompletedBook = () => {
  return (
    <div>
        <form>
            <BookCard 
                // title={book.title}
                // author={book.author}
                // cover={book.image}
            />
            <DropDown /> 
            <input type="text" className="review" maxlength="280"/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
};
export default CompletedBook;
