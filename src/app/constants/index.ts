import binance from "../../assets/binance.png";
import bKash from "../../assets/bkash.png";
import neteller from "../../assets/neteller.png";
import skrill from "../../assets/skrill.png";

export const accountTypes = [
  {
    id: 1,
    title: "Standard",
    subtitle: "Recommended",
    color: "blue",
    description: "Most popular! Great account for all types of traders",
    minDeposit: 10,
    spread: 0.2,
    commision: 0,
  },
  {
    id: 2,
    title: "Pro",
    subtitle: "Professional",
    color: "red",
    description: "Most popular! Great account for all types of traders",
    minDeposit: 10,
    spread: 0.2,
    commision: 0,
  },
  {
    id: 3,
    title: "Raw Spread",
    subtitle: "Instant",
    color: "green",
    description: "Most popular! Great account for all types of traders",
    minDeposit: 10,
    spread: 0.2,
    commision: 0,
  },
];

export const paymentMethods = [
  {
    name: "BinancePay",
    website: "www.binancepay.com",
    logo: binance,
    processingTime: "Instant - 30 minutes",
    fee: "0%",
    limits: "10-20,000 USD",
  },
  {
    name: "bKash",
    website: "www.binancepay.com",
    logo: bKash,
    processingTime: "Instant - 30 minutes",
    fee: "0%",
    limits: "10-20,000 USD",
  },
  {
    name: "Neteller",
    website: "www.binancepay.com",
    logo: neteller,
    processingTime: "Instant - 30 minutes",
    fee: "0%",
    limits: "10-20,000 USD",
  },
  {
    name: "Srill",
    website: "www.binancepay.com",
    logo: skrill,
    processingTime: "Instant - 30 minutes",
    fee: "0%",
    limits: "10-20,000 USD",
  },
  {
    name: "BinancePay",
    website: "www.binancepay.com",
    logo: binance,
    processingTime: "Instant - 30 minutes",
    fee: "0%",
    limits: "10-20,000 USD",
  },
  {
    name: "BinancePay",
    website: "www.binancepay.com",
    logo: binance,
    processingTime: "Instant - 30 minutes",
    fee: "0%",
    limits: "10-20,000 USD",
  },
];
