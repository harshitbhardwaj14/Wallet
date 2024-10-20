import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="p-6 rounded-xl bg-[#202020] text-gray-300 shadow"
    >
      <h1 className="text-2xl border-b pb-2 font-bold tracking-wide">
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
}
