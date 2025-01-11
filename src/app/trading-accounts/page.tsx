"use client";

import AccountInfoCard from "@/components/custom-card/account-info-card";
import AccountInfoCardHorizontal from "@/components/custom-card/account-info-card-horizontal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TAccountInfo } from "@/types";
import { Grid, List, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TradingAccounts = () => {
  const [value, setValue] = useState("Real");
  const [viewOption, setViewOption] = useState("list");

  const router = useRouter();

  const onChange = (value: string) => {
    setValue(value);
  };

  const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

  return (
    <div>
      <div className="flex items-center justify-between gap-4 p-4 border-b">
        <div className="flex items-center gap-2">
          <Tabs
            onValueChange={onChange}
            defaultValue={value}
            className="w-full min-w-40"
          >
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-md">
              <TabsTrigger
                value="Real"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Real
              </TabsTrigger>
              <TabsTrigger
                value="Demo"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Demo
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button
            variant="outline"
            className="ml-2"
            onClick={() => router.push("/create-account")}
          >
            <Plus className="mr-2 h-4 w-4" /> Create new account
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Input type="text" placeholder="Search" className="pr-10" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <Select>
            <SelectTrigger className="w-[150px]">
              <span>Newest first</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="a-z">A-Z</SelectItem>
              <SelectItem value="z-a">Z-A</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewOption("list")}
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewOption("grid")}
            >
              <Grid className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {viewOption === "list" ? (
        <div className="p-6 space-y-4">
          {accounts.map((account: TAccountInfo, index: number) => (
            <div key={index}>
              <AccountInfoCardHorizontal accountInfo={account} />
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accounts.map((account: TAccountInfo, index: number) => (
            <div key={index}>
              <AccountInfoCard accountInfo={account} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TradingAccounts;
