import React from "react";

const AllBoards = () => {
  return (
    <main className="dashboard">
      <section className="board-group">
        <header>
          <div className="board-section-logo">
            <span className="person-logo"></span>
          </div>
          <h2>Personal Boards</h2>
        </header>

        <ul className="dashboard-board-tiles">
          <li className="board-tile">
            <a>
              <span className="board-title">Website Development</span>
            </a>
          </li>

          <li className="board-tile">
            <a>
              <span className="board-title">Recipes</span>
            </a>
          </li>

          <li className="board-tile">
            <a>
              <span className="board-title">Weekend Projects</span>
            </a>
          </li>

          <li className="board-tile">
            <a>
              <span className="board-title">Legal Stuff</span>
            </a>
          </li>

          <li className="board-tile">
            <a>
              <span className="board-title">Running Amuck</span>
            </a>
          </li>

          <li className="board-tile">
            <a className="new-board">
              <span className="board-title">Create new board...</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AllBoards;
