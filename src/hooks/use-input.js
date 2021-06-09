import { useState } from 'react';
const useInput = (testValue) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const isValid = testValue(value);
  const hasError = isTouched && !isValid;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const touched = ()=>{
      setIsTouched(true);
  }

  const reset= ()=>{
      setValue('');
      setIsTouched(false);
  }

  return {
    value,
    inputChangeHandler,
    inputBlurHandler,
    hasError,
    isValid,
    touched,
    reset,
  };
};

export default useInput;
