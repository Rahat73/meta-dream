import React from "react";
import { Card, CardContent } from "../ui/card";
import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";

const AccountInfoCard = () => {
  return (
    <Card className="max-w-md w-full bg-white shadow-sm">
      <CardContent className="p-5">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-2">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm font-medium">
                Real
              </span>
              <span className="text-sm text-gray-900">#3243466</span>
            </div>
            <Button
              variant="outline"
              className="border-gray-200 hover:bg-gray-50 hover:border-gray-200 text-gray-700 font-medium px-4 py-2 h-10"
            >
              <MoreVertical className="h-4 w-4 text-gray-500" />
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-sm text-gray-500">Number</span>
              <span className="text-sm text-gray-900 font-semibold">
                #3243466
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-sm text-gray-500">Platform</span>
              <span className="text-sm text-gray-900 font-semibold">mt5</span>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-sm text-gray-500">Type</span>
              <span className="text-sm text-gray-900 font-semibold">
                Standard
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-sm text-gray-500">Server</span>
              <span className="text-sm text-gray-900 font-semibold">
                Metadream--mt5real12
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-sm text-gray-500">Actual leverage</span>
              <span className="text-sm text-gray-900 font-semibold">1:200</span>
            </div>
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-sm text-gray-500">Max leverage</span>
              <span className="text-sm text-gray-900 font-semibold">1:200</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountInfoCard;
