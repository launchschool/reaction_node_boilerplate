// servers as a container for lsits, lists are iterated through
import React from "react";
import List from "./List";
import { useSelector } from "react-redux";

const ListContainer = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <main>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists.map((list) => {
            return <List key={list.id} list={list} />;
          })}
        </div>
        <div id="new-list" className="new-list">
          <span>Add a list...</span>
          <input type="text" placeholder="Add a list..." />
          <div>
            <input type="submit" className="button" value="Save" />
            <i className="x-icon icon"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListContainer;
