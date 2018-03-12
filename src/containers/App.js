import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import App from "../App.jsx";
import * as actions from "../actions";

const mapStateToProps = state => {
  return {
    monsters: state.monsters.present,
    monsterInstances: state.monsterInstances.present,
    hasHistory:
      state.monsters.past.length > 0 || state.monsterInstances.past.length > 0,
    hasFuture:
      state.monsters.future.length > 0 ||
      state.monsterInstances.future.length > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMonsters: id => dispatch(actions.addMonsters(id)),
    removeInstance: (id, index) => dispatch(actions.removeInstance(id, index)),
    addInstance: (id, number, isElite) =>
      dispatch(actions.addInstance(id, number, isElite)),
    editInstance: (id, index, isElite, number) =>
      dispatch(actions.editInstance(id, index, isElite, number)),
    damageInstance: (id, index, damage) =>
      dispatch(actions.damageInstance(id, index, damage)),
    addStatus: (id, index, status) =>
      dispatch(actions.addStatus(id, index, status)),
    removeStatus: (id, index, status) =>
      dispatch(actions.removeStatus(id, index, status)),
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
