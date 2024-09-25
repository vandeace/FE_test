import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteGate } from "@/hooks/api/use-delete-master-data";
import { TGate } from "@/types/master";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import ModalForm from "./modal-form";

const ActionTable = ({ data }: { data: TGate }) => {
  const { mutate } = useDeleteGate();
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <div className="flex items-center justify-center gap-x-4">
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant="default" className="bg-secondary-blue text-[#fff]">
            <FaEdit className="mr-2" />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Master Data</DialogTitle>
          </DialogHeader>
          <ModalForm data={data} handleClose={() => setOpenDialog(!openDialog)} />
        </DialogContent>
      </Dialog>
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
