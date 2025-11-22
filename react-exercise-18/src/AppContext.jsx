import { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  contacts: [],
  selected: null, 
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "EDIT":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };

    case "DELETE":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload ? { ...c, favorite: !c.favorite } : c
        ),
      };

    case "SET_EDIT":
      return { ...state, selected: action.payload };

    case "CLEAR_EDIT":
      return { ...state, selected: null };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}


export default AppContext;