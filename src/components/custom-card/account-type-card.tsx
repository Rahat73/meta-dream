import { CircleCheck } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const AccountTypeCard = () => {
  return (
    <Card className="max-w-md w-full hover:border-[#0D6EFD] border-2 rounded-2xl">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Standard</h3>
          <div className="flex items-center gap-1.5 w-fit bg-blue-600 text-white px-2.5 py-1 rounded-lg text-sm font-medium">
            <CircleCheck className="h-4 w-4" />
            Recommended
          </div>
          <p className="text-gray-500 text-base">
            Most popular! Great account for all types of traders
          </p>
        </div>

        <div className="space-y-4 pt-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Minimum deposit</span>
            <span className="text-gray-900 font-semibold">10 USD</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Spread</span>
            <span className="text-gray-900 font-semibold">From 0.20</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Commission</span>
            <span className="text-gray-900 font-semibold">No commission</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountTypeCard;
