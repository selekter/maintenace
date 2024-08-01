import { Link } from "@inertiajs/react";
import React from "react";

export default function LinkButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className={
        `px-5 py-1 my-2 rounded transition active:scale-95 ` + className
      }
    >
      {children}
    </Link>
  );
}
