import { CircleCheck } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { TAccountType } from "@/types";

const AccountTypeCard = ({ accountType }: { accountType: TAccountType }) => {
  const { title, subtitle, color, description, minDeposit, spread, commision } =
    accountType;

  return (
    <Card className="max-w-md w-full hover:border-[#0D6EFD] border-2 rounded-2xl cursor-pointer">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div
            className="flex items-center gap-1.5 w-fit text-white px-2.5 py-1 rounded-lg text-sm font-medium"
            style={{ backgroundColor: color }}
          >
            <CircleCheck className="h-4 w-4" />
            {subtitle}
          </div>
          <p className="text-gray-500 text-base">{description}</p>
        </div>

        <div className="space-y-4 pt-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Minimum deposit</span>
            <span className="text-gray-900 font-semibold">
              {minDeposit} USD
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Spread</span>
            <span className="text-gray-900 font-semibold">
              From {spread.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Commission</span>
            <span className="text-gray-900 font-semibold">
              {commision ? commision.toFixed(2) : "No commission"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountTypeCard;
