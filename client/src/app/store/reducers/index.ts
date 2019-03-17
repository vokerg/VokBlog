export interface Store {
  someElement: string
}

export function reducer(state:string="ahaha", action) {
  console.log("I'm in the reducer");
  switch (action.type) {
    case "SET_SOMETHING": {
      return action.payload;
    }
    default: {
      return state;
    }
  }

  return state;
}
