import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//     background-color: rgb(233, 159, 159);
//   }

//   &.invalid label {
//     color: red;
//   }
// `;

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#e99f9f" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* <div className="form-control"> */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
        /> */}

        {/* <FormControl className={!isValid && "invalid"}> */}
        {/* <FormControl invalid={!isValid}> */}
        <label>Work to do</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
        {/* </FormControl> */}
      </div>
      <Button type="submit">Add Work</Button>
    </form>
  );
};

export default CourseInput;
