const Reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        s_modal: !state.s_modal,
      };
    }

    case "DARK": {
      return {
        s_darkMode: !state.s_darkMode,
      };
    }
    case "UPDATE_CARDS":
      return {
        cards: action.payload,
      }
    default: {
      return state;
    }
  }
};

export default Reducer;
