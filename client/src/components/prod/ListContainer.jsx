// servers as a container for lsits, lists are iterated through
import React, { useState } from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../actions/ListActions";

const ListContainer = () => {
  // When the create a list button tile is clicked, it should add the `selected` class to the `#new-list.new-list` element. This will display the form. When either the “Save” or “X” buttons are clicked, the `selected` class should be removed.
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const { id } = useParams();

  let [visibility, setVisibility] = useState(false);
  let [listName, setListName] = useState("");
  let [activeList, setActiveList] = useState("");

  const handleClick = () => {
    setVisibility(true);
  };

  const handleXClick = (event) => {
    event.stopPropagation();
    setVisibility(false);
  };

  const handleSaveClick = (event) => {
    if (listName.length > 0) {
      handleXClick(event);

      let list = {
        boardId: id,
        list: {
          title: listName,
        },
      };

      dispatch(
        actions.createList(list, () => {
          setListName("");
        })
      );
    }
  };

  return (
    <main>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists.map((list) => {
            return (
              <List 
                key={list.id} 
                list={list} 
                activeList={activeList === list.id} 
                setActive={setActiveList} 
              />
            )
          })}
        </div>
        <div
          id="new-list"
          className={`new-list ${visibility ? "selected" : ""}`}
          onClick={handleClick}
        >
          <span>Add a list...</span>
          <input
            type="text"
            placeholder="Add a list..."
            value={listName}
            onChange={(event) => setListName(event.target.value)}
          />
          <div>
            <input
              type="submit"
              className="button"
              value="Save"
              onClick={handleSaveClick}
            />
            <i className="x-icon icon" onClick={handleXClick}></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListContainer;
