import TableMaster from "./components/table-master";
import TableFilter from "./components/table-filter";
import React from "react";
import HeaderTitle from "./components/header-title";

function Page() {
  return (
    <div className="flex w-full flex-col">
      <HeaderTitle />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
        <TableFilter />
        <TableMaster />
      </section>
    </div>
  );
}

export default Page;
