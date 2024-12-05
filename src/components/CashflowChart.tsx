import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { month: "Jan", income: 4000, expenses: 2400, prediction: null },
  { month: "Feb", income: 3000, expenses: 1398, prediction: null },
  { month: "Mar", income: 2000, expenses: 9800, prediction: null },
  { month: "Apr", income: 2780, expenses: 3908, prediction: null },
  { month: "May", income: 1890, expenses: 4800, prediction: null },
  { month: "Jun", income: 2390, expenses: 3800, prediction: 2500 },
];

export const CashflowChart = () => {
  return (
    <Card className="p-6 h-[400px] card-gradient">
      <h3 className="text-lg font-semibold mb-4">Cashflow Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#10B981" strokeWidth={2} />
          <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} />
          <Line 
            type="monotone" 
            dataKey="prediction" 
            stroke="#6366F1" 
            strokeDasharray="5 5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};