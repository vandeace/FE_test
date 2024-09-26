"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const NotFound = async () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-[100vh] flex-col">
      <Image src={"/not-found.jpg"} alt="not found" width={400} height={400} />
      <h1 className="text-2xl font-black">Not Found</h1>
      <Button variant="link" className="underline" onClick={() => router.push("/dashboard")}>
        Go to Dashboard
      </Button>
    </div>
  );
};

export default NotFound;
