"use client";
import { CreateIcon } from "@/components/icons/create";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
interface TTitle {
  title: string;
  urlBtn?: string;
}
export default function Title({ title, urlBtn }: TTitle) {
  const router = useRouter();
  return (
    <div className="mb-3 flex items-center justify-between rounded-md bg-[#fff] p-4 drop-shadow-2xl">
      <h1 className="text-xl font-bold">{title}</h1>
      {urlBtn && (
        <Button
          onClick={() => router.push(urlBtn)}
          className="w-[200px] text-[#fff] "
        >
          <CreateIcon className="mr-2" />
          Tambah Data
        </Button>
      )}
    </div>
  );
}
