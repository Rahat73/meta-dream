import PaymentMethodCard from "@/components/custom-card/payment-method-card";
import { paymentMethods } from "../constants";

const Deposit = () => {
  return (
    <div className="p-6 my-3">
      <div className="text-center">
        <p className="text-lg font-semibold">Deposit</p>
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
  );
};

export default Deposit;
