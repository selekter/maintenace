export default function Button({
  className = "",
  disabled,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={
        `px-5 py-1 rounded transition active:scale-95 ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
