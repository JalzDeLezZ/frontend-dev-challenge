const Reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        s_modal: !state.s_modal,
      };
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
