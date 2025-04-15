import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { User, FileText, ClipboardList, Plane } from "lucide-react"

const COLORS = ["#14b8a6", "#6366f1", "#f43f5e", "#facc15"]

const spendingCategories = [
  { name: "Travel", value: 400 },
  { name: "Meals", value: 300 },
  { name: "Supplies", value: 200 },
  { name: "Other", value: 100 },
]

const weeklyExpenses = [
  { day: "Mon", value: 100 },
  { day: "Tue", value: 250 },
  { day: "Wed", value: 175 },
  { day: "Thu", value: 200 }, 
  { day: "Fri", value: 300 },   
]

const yearlyComparison = [
  { month: "Jan", thisYear: 800, lastYear: 650 },
  { month: "Feb", thisYear: 950, lastYear: 700 },
  { month: "Mar", thisYear: 870, lastYear: 720 },
]

const statBoxes = [
  { icon: <FileText />, label: "Reports", value: 12 },
  { icon: <ClipboardList />, label: "Receipts", value: 38 },
  { icon: <Plane />, label: "Trips", value: 5 },
]

export default function Home() {
  return (
    <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
      {/* Welcome Card */}
      <Card className="col-span-1 xl:col-span-3 bg-[#141414] border border-[#2a2a2a]">
        <CardContent className="p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl text-white font-bold">Welcome back, Hetansh!</h2>
          </div>
          <img src="/avatar.png" alt="User Avatar" className="h-12 w-12 rounded-full border-2 border-emerald-400" />
        </CardContent>
      </Card>

      {/* Stat Boxes */}
      {statBoxes.map((box, i) => (
        <Card key={i} className="bg-[#141414] border border-[#2a2a2a] text-center p-4 flex flex-col items-center space-y-2">
          <div className="text-emerald-400">{box.icon}</div>
          <div className="text-2xl font-bold text-white">{box.value}</div>
          <div className="text-sm text-gray-400">{box.label}</div>
        </Card>
      ))}

      {/* Pie Chart - Spending Categories */}
      <Card className="col-span-1 bg-[#141414] border border-[#2a2a2a]">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Spending Categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={spendingCategories} dataKey="value" nameKey="name" innerRadius={40} outerRadius={80}>
                {spendingCategories.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Weekly Expenses - Bar */}
      <Card className="col-span-1 bg-[#141414] border border-[#2a2a2a]">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Weekly Expenses</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyExpenses}>
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Yearly Comparison - Line Chart */}
      <Card className="col-span-1 bg-[#141414] border border-[#2a2a2a]">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Year-over-Year</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={yearlyComparison}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="thisYear" stroke="#14b8a6" strokeWidth={2} />
              <Line type="monotone" dataKey="lastYear" stroke="#f43f5e" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Activity Feed */}
      <Card className="col-span-1 xl:col-span-3 bg-[#141414] border border-[#2a2a2a]">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Recent Activity</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>✔️ You uploaded 3 receipts 1 hour ago</li>  
            <li>📩 Mike submitted a new expense report</li>
            <li>🛫 Trip to Berlin logged by Sarah</li>
            <li>📁 You approved an advance of €500</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
