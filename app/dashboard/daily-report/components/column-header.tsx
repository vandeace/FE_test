/* eslint-disable @typescript-eslint/no-unused-vars */
import { createColumn } from "@/hooks/utils/table";
import { formatDate } from "@/lib/formateDate";
import { romanize } from "@/lib/romanize";
import { TLalin } from "@/types/lalin";
import { createColumnHelper } from "@tanstack/react-table";

export const columnHelper = createColumnHelper<TLalin>();

export const columns = (value: string) => {
  const defaultColumn = [
    columnHelper.display({
      id: "No",
      size: 5,
      header: () => createColumn("No", "text-left text-[#202124] font-bold text-sm max-w-[10px]"),
      cell: info => <div className="py-1">{info.row.index + 1}</div>,
    }),
    columnHelper.display({
      id: "Ruas",
      size: 80,
      header: () => createColumn("Ruas", "text-left text-[#202124] font-bold text-sm"),
      cell: info => (
        <div className="text-sm">
          <p className="py-1">Ruas {info.row.original.IdCabang}</p>
        </div>
      ),
    }),
    columnHelper.display({
      id: "Gerbang",
      size: 40,
      header: () => createColumn("Gerbang", "text-left text-[#202124] font-bold text-sm"),
      cell: info => (
        <div className="text-sm">
          <p className="py-1">Gerbang {info.row.original.IdGerbang}</p>
        </div>
      ),
    }),
    columnHelper.display({
      id: "Gardu",
      size: 40,
      header: () => createColumn("Gerbang", "text-left text-[#202124] font-bold text-sm"),
      cell: info => (
        <div className="text-sm">
          <p className="py-1">Gardu {info.row.original.IdGardu}</p>
        </div>
      ),
    }),
    columnHelper.display({
      id: "Hari",
      size: 40,
      header: () => createColumn("Hari", "text-left text-[#202124] font-bold text-sm"),
      cell: info => (
        <div className="text-sm">
          <p className="py-1">
            {formatDate(new Date(info.row.original.Tanggal), {
              weekday: "long",
              day: undefined,
              month: undefined,
              year: undefined,
            })}
          </p>
        </div>
      ),
    }),
    columnHelper.display({
      id: "Tanggal",
      size: 40,
      header: () => createColumn("Tanggal", "text-center text-[#202124] font-bold text-sm"),
      cell: info => (
        <div className="text-sm text-center">
          <p className="py-1">
            {formatDate(
              new Date(info.row.original.Tanggal),
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              },
              "-",
            )}
          </p>
        </div>
      ),
    }),
    columnHelper.display({
      id: "Golongan",
      size: 40,
      header: () => createColumn("Golongan", "text-center text-[#202124] font-bold text-sm"),
      cell: info => (
        <div className="text-sm text-center">
          <p className="py-1">Gol {romanize(info.row.original.Golongan)}</p>
        </div>
      ),
    }),
    columnHelper.display({
      id: "Method",
      size: 40,
      header: () =>
        createColumn("Metode Pembayaran", "text-center text-[#202124] font-bold text-sm"),
      cell: () => (
        <div className="text-sm text-center">
          <p className="py-1">{value.replace("Total", "")}</p>
        </div>
      ),
    }),
    columnHelper.display({
      id: "total",
      size: 40,
      header: () => createColumn("Total Lalin", "text-center text-[#202124] font-bold text-sm"),
      cell: info => {
        const raw = info.row.original;

        let total = 0;

        const eToll = raw.eBca + raw.eBri + raw.eBni + raw.eDKI + raw.eMandiri + raw.eMega;
        const ktp = raw.DinasKary + raw.DinasMitra + raw.DinasOpr;

        switch (value) {
          case "Total Tunai":
            total = raw.Tunai;
            break;
          case "Total E-Toll":
            total = eToll;
            break;
          case "Total Flo":
            total = raw.eFlo;
            break;
          case "Total KTP":
            total = ktp;
            break;
          case "Total Keseluruhan":
            total = ktp + eToll + raw.Tunai + raw.eFlo;
            break;
          case "E-Toll+Tunai+Flo":
            total = eToll + raw.Tunai + raw.eFlo;
            break;
        }

        return (
          <div className="text-sm text-center">
            <p className="py-1">{total}</p>
          </div>
        );
      },
    }),
  ];

  return [...defaultColumn];
};
