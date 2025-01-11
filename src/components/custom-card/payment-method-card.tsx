import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TPaymentMethod } from "@/types";
import Image from "next/image";

const PaymentMethodCard = ({
  paymentMethod,
}: {
  paymentMethod: TPaymentMethod;
}) => {
  return (
    <Card className="max-w-lg border border-gray-200 rounded-lg shadow-sm">
      <CardHeader className="border-b">
        <div className="flex items-center gap-4">
          <Image
            src={paymentMethod.logo}
            alt="Binance Pay"
            className="h-20 w-20 rounded-lg"
          />
          <div>
            <CardTitle className="text-lg font-semibold">
              {paymentMethod.name}
            </CardTitle>
            <p className="text-sm text-gray-500">{paymentMethod.website}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-4">
        <div className="grid grid-cols-2 gap-y-2 text-sm">
          <p className="text-gray-500">Processing time</p>
          <p className="font-medium text-end">{paymentMethod.processingTime}</p>

          <p className="text-gray-500">Fee</p>
          <p className="font-medium text-end">{paymentMethod.fee}</p>

          <p className="text-gray-500">Limits</p>
          <p className="font-medium text-end">{paymentMethod.limits}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodCard;
