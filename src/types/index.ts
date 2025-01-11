export type TAccountInfo = {
  accountType: "Demo" | "Real";
  leverage: string;
  currency: "USD" | "EUR" | "GBP";
  nickname: string;
  password: string;
  type: "Standard" | "Pro" | "Raw Spread";
  platform: "mt4" | "mt5";
};

export type TAccountType = {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  minDeposit: number;
  spread: number;
  commision: number;
};
