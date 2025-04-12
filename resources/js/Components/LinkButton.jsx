import { Link } from "@inertiajs/react";
import React from "react";

export default function LinkButton({ className = "", children, ...props }) {
  return (
    <Link
      {...props}
      className={
        `rounded-xs px-5 py-2 text-center transition active:scale-95 md:py-1 ` +
        className
      }
    >
      {children}
    </Link>
  );
}
