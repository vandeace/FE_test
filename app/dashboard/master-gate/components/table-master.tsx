"use client";
import { DataTableX } from "@/components/datatable";
import useMutableSearchParams from "@/hooks/utils/param";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { columns } from "./column-header";
import { useGetAllGate } from "@/hooks/api/use-get-master-data";
export default function TableMaster() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const searchParams = useMutableSearchParams();

  const [gate] = useDebounce(searchParams.get("gate"), 1000);
  const [branch] = useDebounce(searchParams.get("branch"), 1000);
  const { data } = useGetAllGate({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    filter: {
      NamaCabang: branch ?? undefined,
      NamaGerbang: gate ?? undefined,
    },
  });

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data.rows.rows ? (
        <DataTableX
          columns={columns}
          data={data?.data.rows.rows}
          pagination={pagination}
          setPagination={setPagination}
          pageCount={data.data.total_pages}
          totalData={data.data.count}
        />
      ) : (
        <div className="flex w-full flex-col items-center justify-center h-96">
          No Data
        </div>
      )}
    </div>
  );
}
