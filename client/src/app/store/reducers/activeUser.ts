export interface State {
  userId: string;
  login: string;
  token: string;
}

export function reducer(state:State={
  userId: "",
  login: "",
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
