import React, { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts"

const COLORS = ["#14b8a6", "#6366f1", "#f43f5e", "#facc15"]
const categories = [
  { name: "Travel", value: 400 },
  { name: "Food", value: 250 },
  { name: "Supplies", value: 200 },
  { name: "Other", value: 100 },
]
const expenseTrends = [
  { month: "Jan", value: 500 },
  { month: "Feb", value: 650 },
  { month: "Mar", value: 720 },
  { month: "Apr", value: 810 },
]
const recentTransactions = [
  { title: "Coffee", amount: 500  , category: "Food", date: "Apr 14" },
  { title: "Taxi", amount: 300, category: "Travel", date: "Apr 13" },
  { title: "Printer Paper", amount: 150, category: "Supplies", date: "Apr 12" },
]

export default function Home() {
  const [expenseInput, setExpenseInput] = useState({
    amount: "",
    category: "",
    date: "",
  })

  const handleAddExpense = () => {
    setExpenseInput({ amount: "", category: "", date: "" })
  }

  const totalExpense = 1200
  const totalIncome = 2000
  const remainingBudget = totalIncome - totalExpense
  const budgetUsage = (totalExpense / totalIncome) * 100

  return (
    <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 text-white font-sans">
      {/* Overview Summary */}
      <Card className="col-span-1 xl:col-span-2 bg-[#141414] border border-[#2a2a2a]">
        <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Income", value: `${totalIncome}`, color: "text-green-400" },
            { label: "Total Expenses", value: `${totalExpense}`, color: "text-red-400" },
            { label: "Remaining Budget", value: `${remainingBudget}`, color: "text-yellow-400" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]"
            >
              <p className="text-gray-400 text-xl">{item.label}</p> {/* Larger text for labels */}
              <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>₹{item.value}</h2> {/* Larger text for values */}
            </div>
          ))}
        </CardContent>
      </Card>

     {/* Add New Expense */}
     <Card className="col-span-full bg-[#1a1a1a] border border-[#2a2a2a] shadow rounded-2xl">
  <CardContent className="p-8 space-y-6">
    <h3 className="text-2xl font-semibold text-white tracking-tight">
      Add New Expense
    </h3>

    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleAddExpense()
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end w-">
        {/* Amount */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">Amount</label>
          <Input
            type="number"
            placeholder="Enter amount"
            className="bg-[#1f1f1f] border border-[#333] text-white placeholder:text-gray-500 focus:ring-teal-500"
            value={expenseInput.amount}
            onChange={(e) =>
              setExpenseInput({ ...expenseInput, amount: e.target.value })
            }
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">Category</label>
          <select
            className="bg-[#1f1f1f] text-white border border-[#333] rounded-md px-3 py-2 focus:ring-teal-500"
            value={expenseInput.category}
            onChange={(e) =>
              setExpenseInput({ ...expenseInput, category: e.target.value })
            }
            required
          >
            <option value="" disabled>Select category</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Supplies">Supplies</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left bg-[#1f1f1f] border border-[#333] text-white px-3 py-2 ${
                  !expenseInput.date && "text-gray-500"
                }`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {expenseInput.date
                  ? format(new Date(expenseInput.date), "MMM dd, yyyy")
                  : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-[#1f1f1f] border-[#333] text-white">
              <Calendar
                mode="single"
                selected={
                  expenseInput.date ? new Date(expenseInput.date) : undefined
                }
                onSelect={(date) =>
                  setExpenseInput({
                    ...expenseInput,
                    date: date?.toISOString().split("T")[0] || "",
                  })
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Button */}
        <div className="flex flex-col gap-2">
          <label className="text-sm opacity-0">Add</label>
          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-md transition"
          >
            Add Expense
          </Button>
        </div>
      </div>
    </form>
  </CardContent>
</Card>



     {/* Recent Transactions */}
<Card className="bg-[#1a1a1a] border border-[#2a2a2a] shadow rounded-2xl">
  <CardContent className="p-6">
    <h3 className="text-2xl font-semibold text-teal-400 mb-4">Recent Transactions</h3>
    <ul className="divide-y divide-[#2a2a2a]">
      {recentTransactions.map((tx, idx) => (
        <li key={idx} className="flex items-center justify-between py-3">
          <div className="flex flex-col">
            <span className="text-white font-medium">{tx.title}</span>
            <span className="text-sm text-gray-500">{tx.category}</span>
          </div>
          <div className="text-right">
            <span className="text-white font-semibold">₹{tx.amount}</span>
            <div className="text-sm text-gray-500">{tx.date}</div>
          </div>
        </li>
      ))}
    </ul>
  </CardContent>
</Card>

      {/* Monthly Breakdown and Expense Trends */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Monthly Breakdown */}
        <Card className="bg-[#1a1a1a] border border-[#2a2a2a] shadow rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Monthly Breakdown</h3> {/* Larger title */}
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={categories} dataKey="value" nameKey="name" innerRadius={60} outerRadius={110}>
                  {categories.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Expense Trends */}
        <Card className="bg-[#1a1a1a] border border-[#2a2a2a] shadow rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Expense Trends</h3> {/* Larger title */}
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={expenseTrends}>
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
