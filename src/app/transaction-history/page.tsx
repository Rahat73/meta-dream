import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUp01, Search, Upload } from "lucide-react";
import React from "react";

const transactions = [
  {
    id: "01",
    txId: "#2872089AGT",
    amount: "$56,200",
    account: "Account 1",
    date: "Apr 23, 2021",
    type: "Deposit",
    status: "Failed",
    referralCode: "A493GA",
    paymentMethod: "BinancePay",
  },
  {
    id: "02",
    txId: "#2872089AGT",
    amount: "$56,200",
    account: "Account 2",
    date: "Apr 23, 2021",
    type: "Withdraw",
    status: "Completed",
    referralCode: "A493GA",
    paymentMethod: "bKash",
  },
  {
    id: "03",
    txId: "#2872089AGT",
    amount: "$56,200",
    account: "Account 1",
    date: "Apr 19, 2021",
    type: "Transfer",
    status: "Completed",
    referralCode: "A493GA",
    paymentMethod: "BinancePay",
  },
  {
    id: "04",
    txId: "#2872089AGT",
    amount: "$56,200",
    account: "Account 1",
    date: "Apr 15, 2021",
    type: "Refund",
    status: "Completed",
    referralCode: "A493GA",
    paymentMethod: "BinancePay",
  },
];

const TransactionHistory = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between py-4">
        <div className="relative w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>

        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Transaction type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deposit">Deposit</SelectItem>
              <SelectItem value="withdraw">Withdraw</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
              <SelectItem value="refund">Refund</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="account1">Account 1</SelectItem>
              <SelectItem value="account2">Account 2</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="gap-2">
            <Upload />
            Export
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">SL</TableHead>
              <TableHead>TRX ID</TableHead>
              <TableHead>AMOUNT</TableHead>
              <TableHead>ACCOUNT</TableHead>
              <TableHead>TRX DATE</TableHead>
              <TableHead>TRX TYPE</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>REFERRAL CODE</TableHead>
              <TableHead>PAYMENT METHOD</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell className="font-medium">
                  {transaction.txId}
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.account}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "Failed"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.referralCode}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-200"></div>
                    {transaction.paymentMethod}
                  </div>
                </TableCell>
                <TableCell>
                  <button className="h-8 w-8 rounded-md hover:bg-slate-100">
                    ⋮
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionHistory;
