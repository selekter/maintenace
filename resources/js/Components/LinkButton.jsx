import { Link } from "@inertiajs/react";
import React from "react";

export default function LinkButton({ className = "", children, ...props }) {
  return (
    <Link
      {...props}
      className={
        `px-2 md:px-5 py-2 rounded transition active:scale-95 ` + className
      }
    >
      {children}
    </Link>
  );
}
