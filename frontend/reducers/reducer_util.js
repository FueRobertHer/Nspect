export const removeByKey = (state, deleteKey) => {
  const newState = Object.assign({}, state);
  delete newState[deleteKey];
  return newState;
}