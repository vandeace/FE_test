"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateIcon } from "@/components/icons/create";
import Title from "@/components/page-title";
import React from "react";
import ModalForm from "./modal-form";

const HeaderTitle = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  return (
    <Title title="Master Data Gerbang">
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button variant="default" className="bg-secondary-blue text-[#fff]">
            <CreateIcon className="mr-2" />
            Tambah Data
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Master Data</DialogTitle>
          </DialogHeader>
          <ModalForm handleClose={() => setOpenDialog(!openDialog)} />
        </DialogContent>
      </Dialog>
    </Title>
  );
};

export default HeaderTitle;
