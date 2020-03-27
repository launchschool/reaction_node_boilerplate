import React from "react";
import { connect } from "react-redux";
import NewBoardForm from "./NewBoardForm";
import * as actions from "../../actions/BoardActions";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (newBoard, callback) => {
      dispatch(actions.createBoard(newBoard));
      callback();
    }
  };
};

class NewBoardFormContainer extends React.Component {
  state = {
    title: ""
  };

  handleTextChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newBoard = { title: this.state.title };

    this.props.onSubmit(newBoard, () => {
      this.setState({
        title: ""
      });
      this.props.onCloseClick(new Event("click"));
    });
  };

  render() {
    return (
      <NewBoardForm
        onCloseClick={this.props.onCloseClick}
        onTextChange={this.handleTextChange}
        onSubmit={this.handleSubmit}
        title={this.state.title}
      />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewBoardFormContainer);
