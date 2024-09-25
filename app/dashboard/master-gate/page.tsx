import Title from "@/components/page-title";
import TableMaster from "./components/table-master";
import TableFilter from "./components/table-filter";

function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title title="Master Data Gerbang" urlBtn="/dashboard/master-gate/add" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
        <TableFilter />
        <TableMaster />
      </section>
    </div>
  );
}

export default Page;
