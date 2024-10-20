"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="text-black bg-[#b198ec] hover:bg-[#b168ec] focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-5 py-2.5 trasition-all font-semibold hover:-translate-y-1 hover:transition-all">
      {children}
    </button>

  );
};
