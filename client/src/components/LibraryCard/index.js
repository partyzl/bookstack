import { React } from "react";
import { useHistory } from "react-router";
import { moveToCurrentBooks } from "../../actions/helpers";

const LibraryCard = ({ key, title, cover, author }) => {


  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="card " id={key}>
        <img src={cover} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="title">{title}</h5>
          <p className="details">{author}</p>

          <div class="form-check">
            <input
              class="form-check-input"
              type="button"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={() => moveToCurrentBooks()}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Currently Reading
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
