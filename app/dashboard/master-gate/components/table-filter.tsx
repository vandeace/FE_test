"use client";
import FilterSearch from "@/components/search";
import React from "react";

const TableFilter = () => {
  return (
    <div className="grid-cols-3 gap-x-4 grid">
      <FilterSearch name="gate" label="Gerbang" placeholder="Cari Gerbang" />
      <FilterSearch name="branch" label="Ruas" placeholder="Cari Ruas" />
    </div>
  );
};

export default TableFilter;
