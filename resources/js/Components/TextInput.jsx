import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", className = "", isFocused = false, ...props },
  ref,
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        "w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs focus:border-indigo-200 focus:outline focus:outline-indigo-500 " +
        className
      }
      ref={input}
    />
  );
});
