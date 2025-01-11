import CreateAccountForm from "@/components/create-new-account-form";
import AccountInfoCard from "@/components/custom-card/account-info-card";
import AccountInfoCardHorizontal from "@/components/custom-card/account-info-card-horizontal";
import AccountTypeCard from "@/components/custom-card/account-type-card";

const TradingAccounts = () => {
  return (
    <div>
      <CreateAccountForm />
      <AccountTypeCard />
      <AccountInfoCardHorizontal />
      <AccountInfoCard />
    </div>
  );
};

export default TradingAccounts;
