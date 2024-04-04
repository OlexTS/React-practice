export const getNewsThunk = () => {
  return async (dispatch) => {
    // const data = await fetch();
    dispatch({ type: "thunk", payload: 100 });
    return;
  };
};
