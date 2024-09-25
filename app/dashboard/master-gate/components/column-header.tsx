import { Button } from "@/components/ui/button";
import { createColumn } from "@/hooks/utils/table";
import { TGate } from "@/types/master";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import ActionTable from "./action-table";

export const columnHelper = createColumnHelper<TGate>();

export const columns = [
  columnHelper.display({
    id: "No",
    size: 5,
    header: () =>
      createColumn(
        "No",
        "text-left text-[#202124] font-bold text-sm max-w-[10px]"
      ),
    cell: (info) => <div className="py-1">{info.row.index + 1}</div>,
  }),
  columnHelper.display({
    id: "Ruas",
    size: 80,
    header: () =>
      createColumn("Ruas", "text-left text-[#202124] font-bold text-sm"),
    cell: (info) => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.NamaCabang}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "Gerbang",
    size: 40,
    header: () =>
      createColumn("Gerbang", "text-left text-[#202124] font-bold text-sm"),
    cell: (info) => (
      <div className="text-sm">
        <p className="py-1">{info.row.original.NamaGerbang}</p>
      </div>
    ),
  }),
  columnHelper.display({
    id: "action",
    size: 80,
    header: () =>
      createColumn("Action", "text-center text-[#202124] font-bold text-sm"),
    cell: (info) => <ActionTable data={info.row.original} />,
  }),
];
