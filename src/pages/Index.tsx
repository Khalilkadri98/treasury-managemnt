import { SummaryCard } from "@/components/SummaryCard";
import { CashflowChart } from "@/components/CashflowChart";
import { TransactionList } from "@/components/TransactionList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard 
            title="Total Income" 
            amount={42000} 
            type="income"
            percentage={12}
          />
          <SummaryCard 
            title="Total Expenses" 
            amount={28000} 
            type="expense"
            percentage={-8}
          />
          <SummaryCard 
            title="Net Cashflow" 
            amount={14000} 
            type="net"
            percentage={15}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CashflowChart />
          </div>
          <div>
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;