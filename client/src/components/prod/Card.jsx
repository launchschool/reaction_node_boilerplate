// template for a single card
import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const Card = ({ card }) => {
  const { title, dueDate, description, labels } = card;

  return (
    <Link to={`/cards/${card.id}`}>
      <div className="card-background">
        <div className="card">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {
              labels.map((label, idx) => {
                return <div key={idx} className={`card-label ${label} colorblindable`}></div>
              })
            }
            <p>{title}</p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue-recent completed">
              {dueDate}
            </i>
            <i className="description-icon sm-icon"></i>
            <i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
