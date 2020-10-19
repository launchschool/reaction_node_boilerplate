import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import * as actions from "../../actions/BoardActions";

const NewBoardForm = (props) => {
  const { value: title, bind: bindTitle } = useInput("");

  const dispatch = useDispatch();

  const createBoard = useCallback(
    (newBoard, callback) => {
      dispatch(actions.createBoard(newBoard, callback));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      const newBoard = { title };
      createBoard(newBoard, props.onCloseClick(new Event("click")));
    },
    [createBoard, props, title]
  );

  return (
    <div>
      <header>
        <span>Create Board</span>
        <a
          href="#"
          className="icon-sm icon-close"
          onClick={props.onCloseClick}
        ></a>
      </header>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <dl>
            <dt>Title</dt>
            <dd>
              <input
                type="text"
                placeholder='Like "Publishing Calendar"...'
                value={title}
                {...bindTitle}
              />
            </dd>
          </dl>
          <button className="button" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBoardForm;
