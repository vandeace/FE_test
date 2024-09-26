import Title from "@/components/page-title";
import TableWrapper from "./components/table-wrapper";

const Page = () => {
  return (
    <div className="flex w-full flex-col">
      <Title title="Laporan Lalin Per Hari" />
      <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
        <TableWrapper />
      </section>
    </div>
  );
};

export default Page;
