import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/BoardActions";
import BoardsDashboard from "./BoardsDashboard";
import Popover from "../shared/Popover";
import NewBoardFormContainer from "./NewBoardFormContainer";

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoards: () => {
      dispatch(actions.fetchBoards());
    }
  };
};

class BoardsDashboardContainer extends React.Component {
  state = {
    popover: {
      visible: false,
      attachedTo: null,
      type: null
    }
  };
  componentDidMount() {
    this.props.onFetchBoards();
  }
  handleNewBoardClick = e => {
    this.setState({
      popover: {
        visible: true,
        attachedTo: e.currentTarget,
        type: "new-board"
      }
    });
  };

  handleClosePopoverClick = e => {
    e.preventDefault();

    this.setState({
      popover: {
        visible: false,
        attachedTo: null,
        type: null
      }
    });
  };

  render() {
    return (
      <div>
        <BoardsDashboard
          boards={this.props.boards}
          onNewBoardClick={this.handleNewBoardClick}
        />
        <Popover {...this.state.popover} coverTarget={true}>
          <NewBoardFormContainer onCloseClick={this.handleClosePopoverClick} />
        </Popover>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsDashboardContainer);
