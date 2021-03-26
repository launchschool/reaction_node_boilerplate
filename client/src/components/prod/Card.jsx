// template for a single card
import React from "react";

const Card = ({ card }) => {
  const { title, dueDate, description, labels } = card;
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {
            labels.map((label, idx) => {
              return <div key={idx} className={`card-label ${label} colorblindable`}></div>
            })
          }
          <p>{description}</p>
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
  );
};
export default Card;
