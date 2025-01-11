"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { accountTypes } from "../constants";
import AccountTypeCard from "@/components/custom-card/account-type-card";
import { useState } from "react";
import CreateAccountForm from "@/components/create-new-account-form";

const CreateAccount = () => {
  const router = useRouter();
  const [selectedAccountType, setSelectedAccountType] = useState<
    string | null
  >();

  const [platform, setPlatform] = useState("mt5");

  return (
    <div>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-lg font-semibold">Create new account</h2>
        </div>

        <div className="flex items-center gap-2">
          <Select onValueChange={setPlatform}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="MT5" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mt5">MT5</SelectItem>
              <SelectItem value="mt4">MT4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {!selectedAccountType ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {accountTypes.map((accountType) => (
              <div
                key={accountType.id}
                onClick={() => setSelectedAccountType(accountType.title)}
              >
                <AccountTypeCard accountType={accountType} />
              </div>
            ))}
          </div>
          <div className="flex justify-between p-6">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Continue <ChevronRight />
            </Button>
            <Button variant="outline">
              <ArrowDown /> More Options
            </Button>
          </div>
        </>
      ) : (
        <>
          <CreateAccountForm
            accountType={selectedAccountType}
            platform={platform}
          />
        </>
      )}
    </div>
  );
};

export default CreateAccount;
