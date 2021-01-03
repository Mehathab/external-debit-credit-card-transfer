import { useState } from "react";

const useSimpleInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const reset = () => setValue(initialValue);
  const clear = () => setValue("");
  const onChange = (e) => setValue(e?.target?.value);
  const bind = { value, onChange };

  return {
    reset,
    clear,
    bind,
    value,
    setValue,
  };
};

export default useSimpleInput;
