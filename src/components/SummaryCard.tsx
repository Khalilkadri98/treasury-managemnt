import { Card } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

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

  const getIcon = () => {
    switch (type) {
      case "income":
        return <ArrowUpIcon className="w-5 h-5 text-income" />;
      case "expense":
        return <ArrowDownIcon className="w-5 h-5 text-expense" />;
      default:
        return <DollarSign className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <Card className="p-6 card-gradient animate-fade-up">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-full ${
            type === "income" ? "bg-income/10" : 
            type === "expense" ? "bg-expense/10" : 
            "bg-primary/10"
          }`}>
            {getIcon()}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className={`text-2xl font-semibold mt-1 ${getColor()}`}>
              ${amount.toLocaleString()}
            </h3>
          </div>
        </div>
        {percentage && (
          <div className="flex items-center">
            {percentage > 0 ? (
              <TrendingUp className="w-4 h-4 text-income" />
            ) : (
              <TrendingDown className="w-4 h-4 text-expense" />
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