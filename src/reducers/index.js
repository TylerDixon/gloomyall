import { combineReducers } from "redux";
import undoable from "redux-undo";

const monstersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MONSTERS":
      return state.concat(action.monsterIDs);
    default:
      return state;
  }
};

const monsterInstances = (state = {}, action) => {
  let monsters = state[action.monsterID]
    ? state[action.monsterID].slice(0)
    : [];

  let monsterToEdit = Object.assign({}, monsters[action.index]);
  const replaceMonsterInPlace = monsterToEdit =>
    monsters
      .slice(0, action.index)
      .concat(monsterToEdit)
      .concat(monsters.slice(action.index + 1));

  switch (action.type) {
    case "ADD_MONSTERS":
      let newState = Object.assign({}, state);
      action.monsterIDs.forEach(
        id => (newState[id] = [{ damage: 0, statuses: [], number: 1 }])
      );
      return newState;

    case "ADD_INSTANCE":
      const monsterToAdd = {
        damage: 0,
        statuses: [],
        number: action.number,
        isElite: action.isElite
      };

      let placementIndex;
      const setIndex = monsters.some((monster, index) => {
        if (monster.number > monsterToAdd.number) {
          placementIndex = index;
          return true;
        }
        return false;
      });
      if (!setIndex) {
        placementIndex = monsters.length;
      }
      monsters.splice(placementIndex, 0, monsterToAdd);
      return {
        ...state,
        [action.monsterID]: monsters
      };

    case "REMOVE_INSTANCE":
      monsters.splice(action.index, 1);
      return {
        ...state,
        [action.monsterID]: monsters
      };

    case "EDIT_INSTANCE":
      monsterToEdit.number = action.number;
      monsterToEdit.isElite = action.isElite;
      monsters = replaceMonsterInPlace(monsterToEdit);
      monsters.sort((a, b) => a.number > b.number);

      return { ...state, [action.monsterID]: monsters };

    case "REMOVE_STATUS":
      var newStatuses = monsterToEdit.statuses.slice(0);
      newStatuses.splice(newStatuses.indexOf(action.status), 1);
      monsterToEdit.statuses = newStatuses;
      return {
        ...state,
        [action.monsterID]: replaceMonsterInPlace(monsterToEdit)
      };

    case "ADD_STATUS":
      var replacementStauses = monsterToEdit.statuses.slice(0);
      replacementStauses.push(action.status);
      monsterToEdit.statuses = replacementStauses;
      return {
        ...state,
        [action.monsterID]: replaceMonsterInPlace(monsterToEdit)
      };

    case "DAMAGE_INSTANCE":
      monsterToEdit.damage += action.damage;
      return {
        ...state,
        [action.monsterID]: replaceMonsterInPlace(monsterToEdit)
      };

    default:
      return state;
  }
};

export default combineReducers({
  monsters: undoable(monstersReducer),
  monsterInstances: undoable(monsterInstances)
});
