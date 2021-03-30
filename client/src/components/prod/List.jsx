// template for a single list
import React, { useState } from "react";
import CardContainer from "./CardContainer";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../actions/ListActions';
import * as cardActions from '../../actions/CardActions';

const List = (props) => {
  // props.setActive props.activeList

  //working here

//   The new card form is active when the parent .list-wrapper 
//   has the add-dropdown-active class and the .add-dropdown.add-bottom element has the active-card class.

// Since only one list should have the form active at a time, only one list should have the add-dropdown-active class at a time.
  const [ inputTitle, setInputTitle ] = useState(false);
  const [ currentTitle, setCurrentTitle ] = useState(props.list.title);
  const [cardTitle, setCardTitle] = useState('');

  const dispatch = useDispatch();

  const handleEnter = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      setInputTitle(false)
      handleSubmit(currentTitle)
    }
  }

  const handleBlur = (e) => {
    setInputTitle(false)
    handleSubmit(currentTitle)
  }

  const handleSubmit = (title) => {
    if (title.length > 0) {
      let list = {id: props.list.id, title}
      dispatch(actions.editListTitle(list));
    } else {
      setCurrentTitle(props.list.title)
    }
  }

  const handleXClick = () => {
    props.setActive("");
    setCardTitle("");
  }

  const handleSubmitCard = (event) => {
    const newCard = {
      "listId": props.list.id,
      "card": {
        "title": cardTitle
      }
    }
    
    if (cardTitle.length > 0) {
      dispatch(cardActions.createCard(newCard, handleXClick));
    }
  }

  const displayTitleInput = () => {
    return (
      inputTitle ?
        <input
          type="text"
          className="list-title"
          value={currentTitle}
          autoFocus="true"
          onChange={(e) => setCurrentTitle(e.target.value)}
          onKeyUp={handleEnter}
          onBlur={handleBlur}
        /> :
        <p className="list-title" onClick={() => setInputTitle(true)}>{props.list.title}</p>
    )
  }

  return (
    <div className={`list-wrapper ${props.activeList ? 'add-dropdown-active' : ''}`}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            {displayTitleInput()}
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <CardContainer listId={props.list.id} />
          <div className={`add-dropdown add-bottom ${props.activeList ? 'active-card' : ''}`}>
            <div className="card">
              <div className="card-info"></div>
              <textarea onChange={(event) => setCardTitle(event.target.value)} value={cardTitle} name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a onClick={handleSubmitCard} className="button">Add</a>
            <i onClick={handleXClick} className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div 
            className="add-card-toggle" 
            data-position="bottom" 
            onClick={() => props.setActive(props.list.id)}
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

{/* <div>
<input
  type="text"
  className="list-title"
  value="List title during editing"
  autoFocus="true"
/>
</div> */}

/*
<div className="list-wrapper">
              <div className="list-background">
                <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                    <input
                      type="text"
                      className="list-title"
                      value="List title during editing"
                      autoFocus="true"
                    />
                  </div>
                  <div className="add-dropdown add-top">
                    <div className="card"></div>
                    <a className="button">Add</a>
                    <i className="x-icon icon"></i>
                    <div className="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div id="cards-container" data-id="list-2-cards">
                    <div className="card-background">
                      <div className="card ">
                        <i className="edit-toggle edit-icon sm-icon"></i>
                        <div className="cover-image"></div>
                        <div className="card-info">
                          <p>
                            Add members to a board (via the sidebar to
                            collaborate, share and discuss.
                          </p>
                        </div>
                        <div className="card-icons">
                          <i className="clock-icon sm-icon due-soon ">Sep 5</i>
                        </div>
                      </div>
                    </div>
                    <div className="card-background">
                      <div className="card ">
                        <i className="edit-toggle edit-icon sm-icon"></i>
                        <div className="cover-image"></div>
                        <div className="card-info">
                          <p>You can also change the background and more.</p>
                        </div>
                        <div className="card-icons"></div>
                      </div>
                    </div>
                  </div>
                  <div className="add-dropdown add-bottom">
                    <div className="card">
                      <div className="card-info"></div>
                      <textarea name="add-card"></textarea>
                      <div className="members"></div>
                    </div>
                    <a className="button">Add</a>
                    <i className="x-icon icon"></i>
                    <div className="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div className="add-card-toggle" data-position="bottom">
                    Add a card...
                  </div>
                </div>
              </div>
            </div>
            <div className="list-wrapper add-dropdown-active">
              <div className="list-background">
                <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                    <p className="list-title">Third List</p>
                  </div>
                  <div className="add-dropdown add-top">
                    <div className="card"></div>
                    <a className="button">Add</a>
                    <i className="x-icon icon"></i>
                    <div className="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div id="cards-container" data-id="list-3-cards">
                    <div className="card-background">
                      <div className="card ">
                        <i className="edit-toggle edit-icon sm-icon"></i>
                        <div className="cover-image"></div>
                        <div className="card-info">
                          <p>
                            This is a card. Drag it onto &quot;Tried it&quot; to show it&apos;s
                            done.
                          </p>
                        </div>
                        <div className="card-icons"></div>
                      </div>
                    </div>
                    <div className="card-background">
                      <div className="card ">
                        <i className="edit-toggle edit-icon sm-icon"></i>
                        <div className="cover-image"></div>
                        <div className="card-info">
                          <div className="card-label yellow colorblindable"></div>
                          <p>Add all the cards and lists you need</p>
                        </div>
                        <div className="card-icons">
                          <i className="description-icon sm-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-dropdown add-bottom active-card">
                    <div className="card">
                      <div className="card-info"></div>
                      <textarea name="add-card"></textarea>
                      <div className="members"></div>
                    </div>
                    <a className="button">Add</a>
                    <i className="x-icon icon"></i>
                    <div className="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div className="add-card-toggle" data-position="bottom">
                    Add a card...
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div id="cards-container" data-id="list-1-cards">

            <div className="card-background">
              <div className="card ">
                <i className="edit-toggle edit-icon sm-icon"></i>
                <div className="card-info">
                  <div className="card-label green colorblindable"></div>
                  <div className="card-label yellow colorblindable"></div>
                  <div className="card-label red colorblindable"></div>
                  <div className="card-label orange colorblindable"></div>
                  <div className="card-label blue colorblindable"></div>
                  <div className="card-label purple colorblindable"></div>
                  <p>
                    Cards do many cool things. Click on this card to open it and
                    learn more...
                  </p>
                </div>
                <div className="card-icons">
                  <i className="clock-icon sm-icon overdue-recent completed">
                    Aug 4
                  </i>
                  <i className="description-icon sm-icon"></i>
                  <i className="comment-icon sm-icon"></i>
                </div>
              </div>
            </div>
            <div className="card-background">
              <div className="card ">
                <i className="edit-toggle edit-icon sm-icon"></i>
                <div className="cover-image"></div>
                <div className="card-info">
                  <p>Another list with stuff</p>
                </div>
                <div className="card-icons">
                  <i className="clock-icon sm-icon overdue ">Aug 3</i>
                  <i className="description-icon sm-icon"></i>
                </div>
              </div>
            </div>
            <div className="card-background">
              <div className="card ">
                <i className="edit-toggle edit-icon sm-icon"></i>
                <div className="cover-image"></div>
                <div className="card-info">
                  <p>Use the + in the top menu to make your first board now.</p>
                </div>
                <div className="card-icons"></div>
              </div>
            </div>
          </div>
          
          */
