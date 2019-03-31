export interface State {
  userId: string;
  username: string;
  token: string;
}

export function reducer(state:State={
  userId: "",
  username: "",
  token: ""
}, action) {
  switch (action.type) {
    case "LOGIN_SUCCESSFUL": {
      return action.payload;
    }
    case "LOGIN_UNSUCCESSFUL": case "LOGOUT": {
      return {
        userId: "",
        login: "",
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

export var getToken = (state:State) => state.token;

export var isAuthenticated = (state:State) => state.userId !== "";

export var getActiveUser = (state:State) => state;
