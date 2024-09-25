import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/login.svg" alt="login logo" width={600} height={600} />
      </div>
    </div>
  );
}
