import React from "react";
import { useForm } from "./useForm";

export default function SimpleForm() {
  const { values, handleChange, handleSubmit } = useForm({
    username: "",
    email: "",
    phone: "",
  });

  const submit = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <>
    <h1>custom hook</h1>
    <form onSubmit={handleSubmit(submit)}>
      <input
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="name"
      />
      <br />

      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
        />
      <br />
      <input
        name="phone"
        value={values.phone}
        onChange={handleChange}
        placeholder="phone"
        />
      <br />

      <button type="submit">Submit</button>
    </form>
    </>
  );
}
