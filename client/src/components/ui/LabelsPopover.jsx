import React from "react";
const LabelsPopover = () => {
  return (
    <div className="popover labels">
      <div id="add-options-labels-dropdown">
        <header>
          <span>Labels</span>
          <a href="#" className="icon-sm icon-close"></a>
        </header>
        <div className="content">
          <input
            className="dropdown-input"
            placeholder="Search labels..."
            type="text"
          />
          <div className="labels-search-results">
            <ul className="label-list">
              <li>
                <div className="green colorblindable" data-id="1">
                  <i className="check-icon sm-icon"></i>
                </div>
                <div className="label-background green"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="yellow colorblindable" data-id="2">
                  <i className="check-icon sm-icon"></i>
                </div>
                <div className="label-background yellow"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="orange colorblindable" data-id="3">
                  <i className="check-icon sm-icon"></i>
                </div>
                <div className="label-background orange"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="red colorblindable" data-id="4">
                  <i className="check-icon sm-icon"></i>
                </div>
                <div className="label-background red"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="purple colorblindable" data-id="5">
                  <i className="check-icon sm-icon"></i>
                </div>
                <div className="label-background purple"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
              <li>
                <div className="blue colorblindable" data-id="6">
                  <i className="check-icon sm-icon"></i>
                </div>
                <div className="label-background blue"></div>
                <div className="label-background-overlay"></div>
                <i className="edit-icon icon not-implemented"></i>
              </li>
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Create a new label</li>
              <hr />
              <li className="toggleColorblind">
                Enable color blind friendly mode.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelsPopover;
