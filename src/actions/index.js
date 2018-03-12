export const addMonsters = monsterIDs => {
  return {
    type: "ADD_MONSTERS",
    monsterIDs
  };
};

export const addInstance = (monsterID, number, isElite) => {
  return {
    type: "ADD_INSTANCE",
    monsterID,
    number,
    isElite
  };
};

export const removeInstance = (monsterID, number, isElite) => {
  return {
    type: "REMOVE_INSTANCE",
    monsterID
  };
};

export const editInstance = (monsterID, index, isElite, number) => {
  return {
    type: "EDIT_INSTANCE",
    monsterID,
    index,
    isElite,
    number
  };
};

export const damageInstance = (monsterID, index, damage) => {
  return {
    type: "DAMAGE_INSTANCE",
    monsterID,
    index,
    damage
  };
};

export const addStatus = (monsterID, index, status) => {
  return {
    type: "ADD_STATUS",
    monsterID,
    index,
    status
  };
};

export const removeStatus = (monsterID, index, status) => {
  return {
    type: "REMOVE_STATUS",
    monsterID,
    index,
    status
  };
};
