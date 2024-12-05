import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  amount: number;
  type: "income" | "expense" | "net";
  percentage?: number;
}

export const SummaryCard = ({ title, amount, type, percentage }: SummaryCardProps) => {
  const getColor = () => {
    switch (type) {
      case "income":
        return "text-income";
      case "expense":
        return "text-expense";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className="p-6 card-gradient animate-fade-up">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className={`text-2xl font-semibold mt-1 ${getColor()}`}>
            ${amount.toLocaleString()}
          </h3>
        </div>
        {percentage && (
          <div className="flex items-center">
            {percentage > 0 ? (
              <ArrowUpIcon className="w-4 h-4 text-income" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 text-expense" />
            )}
            <span className={`ml-1 ${percentage > 0 ? "text-income" : "text-expense"}`}>
              {Math.abs(percentage)}%
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};