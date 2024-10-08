import React from "react";
import useMutableSearchParams from "@/hooks/utils/param";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface TFilterSearch {
  placeholder: string;
  name: string;
  label: string;
}
const FilterSearch = ({ name, label, placeholder }: TFilterSearch) => {
  const searchParams = useMutableSearchParams();
  return (
    <div>
      <Label htmlFor={name} className="mb-1 block text-sm font-bold">
        {label}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        defaultValue={searchParams.get(name) ?? undefined}
        onChange={(e) => {
          searchParams.set(name, e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default FilterSearch;
