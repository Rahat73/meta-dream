import PaymentMethodCard from "@/components/custom-card/payment-method-card";
import { paymentMethods } from "../constants";
import { AlertTriangle, User } from "lucide-react";

const Withdraw = () => {
  return (
    <div className="p-6 my-3">
      <div className="text-center">
        <p className="text-lg font-semibold">Withdraw</p>
        <p className="text-sm text-gray-500">
          Manage your information, subscriptions, and security.
        </p>
      </div>

      <div className="my-10 w-8/12 mx-auto flex items-center justify-between p-4 rounded-lg bg-orange-50 border border-orange-200">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-orange-100 text-orange-600">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h4 className="text-orange-800 font-semibold">
              Verify KYC to withdraw
            </h4>
            <p className="text-sm text-orange-600">
              Two-step verification is enabled
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-orange-700 border border-orange-300 rounded-md hover:bg-orange-100">
          <User size={16} />
          Go to accounts
        </button>
      </div>

      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {paymentMethods.map((method, index) => (
          <PaymentMethodCard key={index} paymentMethod={method} />
        ))}
      </div>

      <div className="my-14">
        <div className="text-center">
          <p className="text-lg font-semibold">Transfer</p>
          <p className="text-sm text-gray-500">
            Manage your information, subscriptions, and security.
          </p>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {paymentMethods.map((method, index) => (
            <PaymentMethodCard key={index} paymentMethod={method} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
