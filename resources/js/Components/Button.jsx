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
        `cursor-pointer rounded-xs px-5 py-2 transition active:scale-95 md:py-1 ${disabled && "opacity-25"} ` +
        className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
