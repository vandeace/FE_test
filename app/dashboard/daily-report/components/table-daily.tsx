"use client";
import { DataTableX } from "@/components/datatable";
import { useGetDailyLalin } from "@/hooks/api/use-get-daily-lalin";
import useMutableSearchParams from "@/hooks/utils/param";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { columns } from "./column-header";

export default function TableDaily({ value }: { value: string }) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const searchParams = useMutableSearchParams();

  const [date] = useDebounce(searchParams.get("date"), 1000);
  const { data } = useGetDailyLalin({
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    filter: {
      tanggal: (date && date.split("-").reverse().join("-")) ?? undefined,
    },
  });

  return (
    <div className="overflow-y-auto w-full">
      {!!data?.data.rows.rows ? (
        <DataTableX
          columns={columns(value)}
          data={data?.data.rows.rows}
          pagination={pagination}
          setPagination={setPagination}
          pageCount={data.data.total_pages}
          totalData={data.data.count}
        />
      ) : (
        <div className="flex w-full flex-col items-center justify-center h-96">No Data</div>
      )}
    </div>
  );
}
