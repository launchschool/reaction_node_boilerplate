import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import * as actions from "../../actions/CardActions";
import Comment from './Comment';
import Action from './Action';

const CardModal = () => {
  // let [commentText, setCommentText] = useState(
  //   "The activities have not been implemented yet"
  // );

  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state);

  let card = state.cards.find((card) => card.id === id);
  let list = state.lists.find((list) => list.id === card.listId);
  let commentArray = state.comments;
  let actionArray = state.actions;

  let commentActions = commentArray.concat(actionArray).sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt)
  })

  // working on rendering actions + comments
  console.log(commentActions);

  card = card || {};
  list = list || {};
  
  let [cardTitle, setCardTitle] = useState(card.title);
  let [cardDescription, setCardDescription] = useState(card.description);
  let [activeDescriptionForm, setActiveDescriptionFrom] = useState(false);

  useEffect(() => {
    dispatch(actions.fetchCard(id));
  }, [dispatch, id]);

  useEffect(() => {
    setCardTitle(card.title);
    setCardDescription(card.description);
  }, [card.title, card.description])


  // Continue here, We need some validation to check for any edits made to a card
  //  there are several properties we have to consider, refer to 1.10.1
  const handleSubmit = (updatedCard) => {
    if (cardTitle.length > 0) {
      dispatch(actions.editCard(card.id, {card: updatedCard}));
    } else {
      alert('wtf you doin?')
    }
  }

  const handleDescriptionSave = (updatedCard) => {
    handleSubmit(updatedCard);
    setActiveDescriptionFrom(false);
  }

  const descriptionForm = () => {
    if (activeDescriptionForm) {
      return (
        <>
          <textarea 
            value={cardDescription}className="textarea-toggle" 
            rows="1" 
            autoFocus
            onChange={({target}) => setCardDescription(target.value)}
          >
          </textarea>
          <div>
            <div className="button" value="Save" onClick={() => handleDescriptionSave({description: cardDescription})}>
              Save
            </div>
            <i className="x-icon icon" onClick={() => setActiveDescriptionFrom(false)}></i>
          </div>
        </>
      )
    }
    
    return (
      <p className="textarea-overlay">{card.description}</p>
    )
  }


  return (
    <div id="modal-container">
      <Link to={`/boards/${list.boardId}`}>
        <div className="screen"></div>
      </Link>
      <div id="modal">
        <Link to={`/boards/${list.boardId}`}>
          <i className="x-icon icon close-modal"></i>
        </Link>
        <header>
          <i className="card-icon icon .close-modal"></i>
          <textarea
            value={cardTitle}
            className="list-title"
            style={{ height: "45px" }}
            onChange={(e) => setCardTitle(e.target.value)}
            onBlur={() => handleSubmit({title: cardTitle})}
          ></textarea>
          <p>
            in list <a className="link">{list && list.title}</a>
            <i className="sub-icon sm-icon"></i>
          </p>
        </header>
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <li className="labels-section">
                  <h3>Labels</h3>
                  {card.labels &&
                    card.labels.map((label, idx) => {
                      return (
                        <div key={idx} className="member-container">
                          <div
                            className={`${label} label colorblindable`}
                          ></div>
                        </div>
                      );
                    })}
                  <div className="member-container">
                    <i className="plus-icon sm-icon"></i>
                  </div>
                </li>
                <li className="due-date-section">
                  <h3>Due Date</h3>
                  <div id="dueDateDisplay" className="overdue completed">
                    <input
                      id="dueDateCheckbox"
                      type="checkbox"
                      className="checkbox"
                      // Come back later to enable this and fix error
                      // checked=""
                    />
                    {card.dueDate} <span>(past due)</span>
                  </div>
                </li>
              </ul>
              <form className="description">
                <p>Description</p>
                <span id="description-edit" className="link" onClick={() => setActiveDescriptionFrom(true)}>
                  Edit
                </span>
                {descriptionForm()}
                <p id="description-edit-options" className={card.description !== cardDescription ? "" : "hidden"}>
                  You have unsaved edits on this field.{" "}
                  <span className="link" onClick={() => setActiveDescriptionFrom(true)}>View edits</span> -{" "}
                  <span className="link" onClick={() => setCardDescription(card.description)}>Discard</span>
                </p>
              </form>
            </li>
            <li className="comment-section">
              <h2 className="comment-icon icon">Add Comment</h2>
              <div>
                <div className="member-container">
                  <div className="card-member">TP</div>
                </div>
                <div className="comment">
                  <label>
                    <textarea
                      required=""
                      rows="1"
                      placeholder="Write a comment..."
                    ></textarea>
                    <div>
                      <a className="light-button card-icon sm-icon"></a>
                      <a className="light-button smiley-icon sm-icon"></a>
                      <a className="light-button email-icon sm-icon"></a>
                      <a className="light-button attachment-icon sm-icon"></a>
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="button not-implemented"
                        value="Save"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </li>
            {/* Come back later to add Comments (card.comments) & Activity Changes (card.actions) */}
            <li className="activity-section">
              <h2 className="activity-icon icon">Activity</h2>
              <ul className="horiz-list">
                <li className="not-implemented">Show Details</li>
              </ul>
              <ul className="modal-activity-list">
                {/* working */}
                <Comment />
                <Action />
                {/* <li>
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
                </li> */}
                {/* <li>
                  <div className="member-container">
                    <div className="card-member small-size">VR</div>
                  </div>
                  <p>
                    <span className="member-name">Victor Reyes</span> changed
                    the background of this board{" "}
                    <small>yesterday at 4:53 PM</small>
                  </p>
                </li> */}
                {/* <li className="activity-comment">
                  <div className="member-container">
                    <div className="card-member">VR</div>
                  </div>
                  <h3>Victor Reyes</h3>
                  <div className="comment static-comment">
                    <span>Example of a comment.</span>
                  </div>
                  <small>
                    22 minutes ago - <span className="link">Edit</span> -{" "}
                    <span className="link">Delete</span>
                  </small>
                  <div className="comment">
                    <label>
                      <textarea
                        defaultValue="Example of a comment."
                        required=""
                        rows="1"
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
                </li> */}
              </ul>
            </li>
          </ul>
        </section>
        <aside className="modal-buttons">
          <h2>Add</h2>
          <ul>
            <li className="member-button">
              <i className="person-icon sm-icon"></i>Members
            </li>
            <li className="label-button">
              <i className="label-icon sm-icon"></i>Labels
            </li>
            <li className="checklist-button">
              <i className="checklist-icon sm-icon"></i>Checklist
            </li>
            <li className="date-button not-implemented">
              <i className="clock-icon sm-icon"></i>Due Date
            </li>
            <li className="attachment-button not-implemented">
              <i className="attachment-icon sm-icon"></i>Attachment
            </li>
          </ul>
          <h2>Actions</h2>
          <ul>
            <li className="move-button">
              <i className="forward-icon sm-icon"></i>Move
            </li>
            <li className="copy-button">
              <i className="card-icon sm-icon"></i>Copy
            </li>
            <li className="subscribe-button">
              <i className="sub-icon sm-icon"></i>Subscribe
              <i className="check-icon sm-icon"></i>
            </li>
            <hr />
            <li className="archive-button">
              <i className="file-icon sm-icon "></i>Archive
            </li>
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Share and more...</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default CardModal;
