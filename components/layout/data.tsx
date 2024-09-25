import { IconType } from "react-icons";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaGear } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

export type MenuChild = {
  title: string;
  link: string;
};

export type Menu = {
  id: number;
  title: string;
  link?: string;
  icon: IconType;
  children?: MenuChild[];
};

export const menu: Menu[] = [
  {
    id: 0,
    title: "Dashboard",
    icon: MdDashboard,
    link: "/dashboard",
  },
  {
    id: 1,
    title: "Laporan Lalin",
    icon: HiOutlineDocumentReport,
    children: [
      {
        title: "Laporan Lalin Perhari",
        link: "/dashboard/daily-report",
      },
    ],
  },
  {
    id: 0,
    title: "Master Gerbang",
    icon: FaGear,
    link: "/dashboard/master-gate",
  },
];
