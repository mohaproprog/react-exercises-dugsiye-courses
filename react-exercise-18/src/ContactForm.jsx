import { useContext, useEffect, useState } from "react";
import AppContext  from "./AppContext";
export default function ContactForm() {
  const { state, dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if(state.selected){
      setName(state.selected.name);
      setEmail(state.selected.email);
      setPhone(state.selected.phone);
    }
  }, [state.selected]);

  const editing = Boolean(state.selected);

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
  }

  function handleAdd(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name,
        email,
        phone,
        favorite: false,
      },
    });

    resetForm();
  }

  function handleUpdate(e) {
    e.preventDefault();

    dispatch({
      type: "EDIT",
      payload: {
        id: state.selected.id,
        name,
        email,
        phone,
      },
    });

    dispatch({ type: "CLEAR_EDIT" });
    resetForm();
  }

  function handleCancel() {
    dispatch({ type: "CLEAR_EDIT" });
    resetForm();
  }

  return (
    <form>
      <input
      type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
      type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
      type="number"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      {editing ? (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
    </form>
  );
}
