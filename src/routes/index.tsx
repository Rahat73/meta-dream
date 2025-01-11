import {
  ArrowDown,
  ArrowUpRight,
  BarChart4,
  History,
  Settings,
} from "lucide-react";

import { JSX } from "react";

type Troute = {
  name: string;
  icon: JSX.Element;
  href: string;
};

const routes: Troute[] = [
  {
    name: "Trading Accounts",
    icon: <BarChart4 size={18} />,
    href: "/",
  },
  {
    name: "Deposit",
    icon: <ArrowDown size={18} />,
    href: "/deposit",
  },
  {
    name: "Withdraw",
    icon: <ArrowUpRight size={18} />,
    href: "/withdraw",
  },
  {
    name: "Transaction History",
    icon: <History size={18} />,
    href: "/transaction-history",
  },
  {
    name: "Settings",
    icon: <Settings size={18} />,
    href: "/settings",
  },
];

export default routes;
