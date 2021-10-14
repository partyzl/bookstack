import React from "react";
import { BookCard, Books } from "../../components";
import { checkToken } from "../../actions/loginauth";


const CompletedBook = () => {
  checkToken()
  return (
    <div>
        <form>
            <BookCard 
                // title={book.title}
                // author={book.author}
                // cover={book.image}
            />
            <input type="text" className="review" maxlength="280"/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
};
export default CompletedBook;
