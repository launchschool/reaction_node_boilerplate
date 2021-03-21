import React from "react";
const CopyCardPopover = () => {
  return (
    <div className="popover copy-card">
      <div>
        <header>
          <span>Copy Card</span>
          <a href="#" className="icon-sm icon-close"></a>
        </header>
        <div className="content">
          <label>Title</label>
          <textarea name="name" style={{ marginBottom: "12px" }}>
            Card title
          </textarea>
          <label>Keep…</label>
          <div className="check-div clearfix">
            <input
              id="keep-comments"
              type="checkbox"
              name="comments"
              checked="checked"
            />
            <label htmlFor="keep-comments">
              Comments <span className="quiet">(1)</span>
            </label>
          </div>
          <br />
          <label>Copy to…</label>
          <div className="button-link setting board">
            <span className="label">Board</span>
            <span className="value js-board-value">First Board</span>
            <label>Board</label>
            <select>
              <option value="1" selected>
                First Board (current)
              </option>
              <option value="2">Second Board</option>
              <option value="3">Third Board</option>
              <option value="4">Fourth Board</option>
              <option value="5">Fifth Board</option>
            </select>
          </div>
          <div>
            <div className="button-link setting list">
              <span className="label">List</span>
              <span className="value js-list-value">Intermediate</span>
              <label>List</label>
              <select>
                <option value="1">Basics</option>
                <option value="2" selected="selected">
                  Intermediate (current)
                </option>
                <option value="3">Advanced</option>
              </select>
            </div>
            <div className="button-link setting position">
              <span className="label">Position</span>
              <span className="value">1</span>
              <label>Position</label>
              <select>
                <option value="top" selected="selected">
                  1 (current)
                </option>
                <option value="98303">2</option>
                <option value="163839">3</option>
                <option value="212991">4</option>
                <option value="245759">5</option>
                <option value="278527">6</option>
                <option value="311295">7</option>
                <option value="bottom">8</option>
              </select>
            </div>
          </div>

          <button className="button" type="submit">
            Create Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyCardPopover;
