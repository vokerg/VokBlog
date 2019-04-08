export interface State {
  userId: string;
  username: string;
  token: string;
}

export function reducer(state:State={
  userId: "",
  username: "",
  token: ""
}, action): State {
  switch (action.type) {
    case "LOGIN_SUCCESSFUL": {
      return action.payload;
    }
    case "LOGIN_UNSUCCESSFUL": case "LOGOUT": {
      return {
        userId: "",
        username: "",
        token: ""
      };
    }
    default: {
      return state;
    }
  }
  return state;
}


export const getActiveUsername = (state:State) => state.username;

export const getToken = (state:State) => state.token;

export const isAuthenticated = (state:State) => state.userId !== "";

export const getActiveUser = (state:State) => state;
