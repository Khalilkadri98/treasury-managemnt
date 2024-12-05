import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const transactions = [
  { id: 1, description: "Client Payment", amount: 5000, type: "income", date: "2024-03-15" },
  { id: 2, description: "Office Rent", amount: 2000, type: "expense", date: "2024-03-14" },
  { id: 3, description: "Software License", amount: 500, type: "expense", date: "2024-03-13" },
  { id: 4, description: "Consulting Fee", amount: 3000, type: "income", date: "2024-03-12" },
];

export const TransactionList = () => {
  return (
    <Card className="p-6 card-gradient">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${
                transaction.type === "income" ? "bg-income/10" : "bg-expense/10"
              }`}>
                {transaction.type === "income" ? (
                  <ArrowUpIcon className="w-4 h-4 text-income" />
                ) : (
                  <ArrowDownIcon className="w-4 h-4 text-expense" />
                )}
              </div>
              <div className="ml-3">
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <span className={`font-semibold ${
              transaction.type === "income" ? "text-income" : "text-expense"
            }`}>
              {transaction.type === "income" ? "+" : "-"}${transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};