import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const chartData = {
  spending: [
    { name: "Food & Dining", value: 25, color: "#fbbf24" },
    { name: "Bills & utilities", value: 20, color: "#38bdf8" },
    { name: "Transportation", value: 10, color: "#22c55e" },
    { name: "Shopping", value: 8, color: "#f43f5e" },
    { name: "Health & Medical", value: 12, color: "#e11d48" },
    { name: "Entertainment", value: 5, color: "#a855f7" },
    { name: "Loans & EMIs", value: 10, color: "#fde047" },
    { name: "Miscellaneous", value: 10, color: "#9ca3af" },
  ],
  payments: [
    { name: "Cash", value: 20, color: "#22c55e" },
    { name: "Credit card", value: 15, color: "#3b82f6" },
    { name: "Debit card", value: 18, color: "#0ea5e9" },
    { name: "Net banking", value: 12, color: "#fb923c" },
    { name: "Upi", value: 25, color: "#a855f7" },
    { name: "Others", value: 10, color: "#6b7280" },
  ],
  dues: [
    { name: "Friends", value: 15, color: "#3b82f6" },
    { name: "Business", value: 18, color: "#f59e0b" },
    { name: "Loans", value: 32, color: "#ef4444" },
    { name: "Due Payment", value: 20, color: "#be123c" },
    { name: "Others", value: 15, color: "#9ca3af" },
  ],
};

const DonutChart = ({ title, data }) => {
  const centerData = data.reduce((a, b) => (b.value > a.value ? b : a));
  return (
    <Card className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-4 flex flex-col items-center w-full">
      <h3 className="text-white font-bold text-2xl mb-6">{title}</h3>
      <div className="h-64 w-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              outerRadius={100}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="text-xl font-bold">{centerData.value}%</p>
          <p className="text-sm text-gray-400">{centerData.name}</p>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-300 grid grid-cols-2 gap-3 w-full">
        {data.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default function Analysis({ totalIncome, totalExpense, remainingBudget }) {
  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <Card className="col-span-1 xl:col-span-2 bg-[#141414] border border-[#2a2a2a]">
        <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Income", value: totalIncome, color: "text-green-400" },
            { label: "Total Expenses", value: totalExpense, color: "text-red-400" },
            { label: "Remaining Budget", value: remainingBudget, color: "text-yellow-400" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]"
            >
              <p className="text-gray-400 text-xl">{item.label}</p>
              <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
                ₹{item.value}
              </h2>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DonutChart title="Most Spending" data={chartData.spending} />
        <DonutChart title="Payment Methods" data={chartData.payments} />
        <DonutChart title="Dues / Borrowed" data={chartData.dues} />
      </div>
    </div>
  );
}
