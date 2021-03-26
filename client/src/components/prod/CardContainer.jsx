// servers as a container for cards, cards are iterated through
import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardContainer = (props) => {
  let cards = useSelector((state) => state.cards);
  cards = cards.filter((card) => {
    return card.listId === props.listId;
  });

  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default CardContainer;

/*
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
              Cards do many cool things. Click on this card to open it and learn
              more...
            </p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue-recent completed">Aug 4</i>
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
      */
