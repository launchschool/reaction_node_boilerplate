import React, {useState} from 'react';

const Comment = () => {
  let [commentText, setCommentText] = useState(
    "The activities have not been implemented yet"
  );

  return (
    <li>
      <div className="member-container">
        <div className="card-member">TP</div>
      </div>
      <h3>Taylor Peat</h3>
      <div className="comment static-comment">
        <span>The activities are not functional.</span>
      </div>
      <small>
        22 minutes ago - <span className="link">Edit</span> -{" "}
        <span className="link">Delete</span>
      </small>
      <div className="comment">
        <label>
          <textarea
            value={commentText}
            required=""
            rows="1"
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <div>
            <a className="light-button card-icon sm-icon"></a>
            <a className="light-button smiley-icon sm-icon"></a>
            <a className="light-button email-icon sm-icon"></a>
          </div>
          <div>
            <p>You haven&apos;t typed anything!</p>
            <input
              type="submit"
              className="button not-implemented"
              value="Save"
            />
            <i className="x-icon icon"></i>
          </div>
        </label>
      </div>
    </li>
  )
}

export default Comment;