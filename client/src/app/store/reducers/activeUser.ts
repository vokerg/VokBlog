
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
    case "LOGIN_UNSUCCESSFUL": {
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
