import React, { useState, useRef } from "react";

import clas from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enterdName = nameInputRef.current.value;
    const enterdUserAge = ageInputRef.current.value;
    if (enterdName.trim().length === 0 || enterdUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        massage: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enterdUserAge < 1) {
      setError({
        title: "Invalid age",
        massage: "Please enter a valid age ( > 0).",
      });
      return;
    }
    props.onAddUser(enterdName, enterdUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.massage}
          onConfirm={errorHandler}
        />
      )}
      <Card className={clas.input}>
        <form onSubmit={addUserHandler }>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
