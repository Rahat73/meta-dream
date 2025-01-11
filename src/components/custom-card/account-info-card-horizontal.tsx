import { TAccountInfo } from "@/types";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart4,
  ChevronDown,
  MoreVertical,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const AccountInfoCardHorizontal = ({
  accountInfo,
}: {
  accountInfo: TAccountInfo;
}) => {
  const { accountType, currency, nickname, type, platform } = accountInfo;

  return (
    <Card className="max-w-6xl w-full bg-white shadow-sm">
      <CardContent className="p-5">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 text-sm">
              <div className="flex items-center gap-1.5 bg-blue-100 text-blue-600 px-3 py-1.5 rounded-md font-medium">
                {accountType}
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-md text-gray-600">
                {platform}
              </div>
              <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-md text-gray-600">
                {type}
              </div>
              <div className="flex items-center gap-1.5 px-3 bg-blue-50 py-1.5 rounded-md text-gray-600">
                {nickname}
              </div>
            </div>
            <ChevronDown className="text-gray-600" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="text-[32px] font-semibold tracking-tight">
                123<span className="text-xl">.00</span>{" "}
                <span className="text-lg font-normal text-gray-600">
                  {currency}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button className="flex-1 bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white font-medium px-4 py-2 h-10">
                <BarChart4 /> Trade
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-gray-200 hover:bg-gray-50 hover:border-gray-200 text-gray-700 font-medium px-4 py-2 h-10"
              >
                <ArrowDown /> Deposit
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-gray-200 hover:bg-gray-50 hover:border-gray-200 text-gray-700 font-medium px-4 py-2 h-10"
              >
                <ArrowUpRight /> Withdraw
              </Button>
              <Button
                variant="outline"
                className="border-gray-200 hover:bg-gray-50 hover:border-gray-200 text-gray-700 font-medium px-4 py-2 h-10"
              >
                <MoreVertical className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountInfoCardHorizontal;
