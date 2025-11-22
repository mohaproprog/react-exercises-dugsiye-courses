import { useContext } from "react";
import AppContext from "./AppContext";

export default function ContactList() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <ul>
      {state.contacts.map((item) => (
        <li key={item.id}>

          <strong style={{ color: item.favorite ? "green" : "black" }}>
           Name:  {item.favorite? "⭐": ""}{item.name}
          </strong>
          <br />
          Email:: {item.email}
          <br /> 
          Number: {item.phone}
          <br />

          <button onClick={() => dispatch({ type: "SET_EDIT", payload: item })}>
            Update
          </button>

          <button onClick={() => dispatch({ type: "DELETE", payload: item.id })}>
            Delete
          </button>

          <button
            onClick={() =>
              dispatch({ type: "TOGGLE_FAVORITE", payload: item.id })
            }
          >
            Favorite
          </button>

        </li>
      ))}
    </ul>
  );
}
