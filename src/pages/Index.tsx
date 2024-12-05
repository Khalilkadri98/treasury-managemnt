import { useState } from "react";
import { SummaryCard } from "@/components/SummaryCard";
import { CashflowChart } from "@/components/CashflowChart";
import { TransactionList } from "@/components/TransactionList";
import { TransactionForm } from "@/components/TransactionForm";
import { Transaction } from "@/types/transaction";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    const newTransaction = {
      ...transaction,
      id: Math.random().toString(36).substr(2, 9),
    };
    setTransactions([newTransaction, ...transactions]);
    toast.success("Transaction added successfully");
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const updateTransaction = (id: string, updatedTransaction: Omit<Transaction, "id">) => {
    setTransactions(
      transactions.map((t) =>
        t.id === id ? { ...updatedTransaction, id } : t
      )
    );
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard 
            title="Total Income" 
            amount={totalIncome} 
            type="income"
            percentage={12}
          />
          <SummaryCard 
            title="Total Expenses" 
            amount={totalExpenses} 
            type="expense"
            percentage={-8}
          />
          <SummaryCard 
            title="Net Cashflow" 
            amount={totalIncome - totalExpenses} 
            type="net"
            percentage={15}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <CashflowChart />
          </div>
          <div>
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Add Income</h3>
              <TransactionForm type="income" onSubmit={addTransaction} />
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Add Expense</h3>
              <TransactionForm type="expense" onSubmit={addTransaction} />
            </Card>
          </div>
        </div>

        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onUpdate={updateTransaction}
        />
      </div>
    </div>
  );
};

export default Index;