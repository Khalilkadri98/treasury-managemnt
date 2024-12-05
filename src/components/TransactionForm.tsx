import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Transaction, TransactionType } from "@/types/transaction";

interface TransactionFormProps {
  type: TransactionType;
  onSubmit: (transaction: Omit<Transaction, "id">) => void;
  initialData?: Transaction;
}

export const TransactionForm = ({ type, onSubmit, initialData }: TransactionFormProps) => {
  const [description, setDescription] = useState(initialData?.description || "");
  const [amount, setAmount] = useState(initialData?.amount.toString() || "");
  const [date, setDate] = useState(initialData?.date || new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState(initialData?.category || "");
  const [notes, setNotes] = useState(initialData?.notes || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description || !amount || !date) {
      toast.error("Please fill in all required fields");
      return;
    }

    onSubmit({
      description,
      amount: parseFloat(amount),
      type,
      date,
      category,
      notes,
    });

    // Reset form if it's not editing
    if (!initialData) {
      setDescription("");
      setAmount("");
      setDate(new Date().toISOString().split("T")[0]);
      setCategory("");
      setNotes("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      
      <div>
        <Input
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      
      <Button type="submit" className="w-full">
        {initialData ? "Update" : "Add"} {type === "income" ? "Income" : "Expense"}
      </Button>
    </form>
  );
};