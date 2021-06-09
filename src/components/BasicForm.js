import React from 'react';
import useInput from '../hooks/use-input';
const BasicForm = () => {
  const {
    value: firstNameValue,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    hasError: firstNameHasError,
    isValid: isFirstNameValid,
    touched: firstNameTouched,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastNameValue,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    hasError: lastNameHasError,
    isValid: isLastNameValid,
    touched: lastNameTouched,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
    isValid: isEmailValid,
    touched: emailTouched,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  let isFormValid = false;
  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    firstNameTouched();
    lastNameTouched();
    emailTouched();
    if (!isFormValid) {
      console.log('NOT VALID');
      return;
    }
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Enter Valid First Name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Enter Valid Last Name</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Enter Valid Email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
