import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, PencilIcon, TrashIcon } from "lucide-react";
import { Transaction } from "@/types/transaction";
import { TransactionForm } from "./TransactionForm";
import { toast } from "sonner";

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, transaction: Omit<Transaction, "id">) => void;
}

export const TransactionList = ({ transactions, onDelete, onUpdate }: TransactionListProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    onDelete(id);
    toast.success("Transaction deleted successfully");
  };

  const handleUpdate = (id: string, transaction: Omit<Transaction, "id">) => {
    onUpdate(id, transaction);
    setEditingId(null);
    toast.success("Transaction updated successfully");
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            {editingId === transaction.id ? (
              <Card className="p-4">
                <TransactionForm
                  type={transaction.type}
                  initialData={transaction}
                  onSubmit={(data) => handleUpdate(transaction.id, data)}
                />
                <Button
                  variant="outline"
                  className="mt-2 w-full"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </Button>
              </Card>
            ) : (
              <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
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
                <div className="flex items-center gap-4">
                  <span className={`font-semibold ${
                    transaction.type === "income" ? "text-income" : "text-expense"
                  }`}>
                    {transaction.type === "income" ? "+" : "-"}${transaction.amount}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingId(transaction.id)}
                  >
                    <PencilIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(transaction.id)}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};