const initialState = { token: "", user: {} };

export const userReducer = (store = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TOKEN":
      console.log("SET_USER_TOKEN", action.payload);
      return {
        token: action.payload,
      };

    default:
      return store;
  }
};
