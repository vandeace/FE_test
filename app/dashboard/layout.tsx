"use client";
import { redirect } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  if (!token) {
    redirect("/login");
  }
  return <div>{children}</div>;
}
