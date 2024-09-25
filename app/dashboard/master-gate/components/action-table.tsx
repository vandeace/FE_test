import { Button } from "@/components/ui/button";
import { useDeleteGate } from "@/hooks/api/use-delete-master-data";
import { TGate } from "@/types/master";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const ActionTable = ({ data }: { data: TGate }) => {
  const { mutate } = useDeleteGate();

  return (
    <div className="flex items-center justify-center gap-x-4">
      <Link href={`/dashboard/employee/${data.id}`}>
        <Button variant="default" className="bg-secondary-blue text-[#fff]">
          <FaEdit className="mr-2" />
          Edit
        </Button>
      </Link>
      <Button
        variant="destructive"
        onClick={() =>
          mutate({
            id: data.id,
            IdCabang: data.IdCabang,
          })
        }
      >
        <FaTrash className="mr-2" />
        Delete
      </Button>
    </div>
  );
};

export default ActionTable;
