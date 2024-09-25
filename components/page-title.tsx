"use client";
import { ReactNode } from "react";
interface TTitle {
  title: string;
  children?: ReactNode;
}
export default function Title({ title, children }: TTitle) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-md bg-[#fff] p-4 drop-shadow-2xl">
      <h1 className="text-xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
