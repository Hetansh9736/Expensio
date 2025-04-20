import React, { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const recentTransactions = [
  { title: "Coffee", amount: 500, category: "Food", date: "Apr 14" },
  { title: "Taxi", amount: 300, category: "Travel", date: "Apr 13" },
  { title: "Printer Paper", amount: 150, category: "Supplies", date: "Apr 12" },
]

export default function Home() {
  const [expenseInput, setExpenseInput] = useState({
    amount: "",
    category: "",
    date: new Date(),
  })

  const [incomeInput, setIncomeInput] = useState({
    amount: "",
    category: "",
    date: new Date(),
  })

  const [receiptInput, setReceiptInput] = useState({
    file: null,
    description: "",
    category: "",
  })

  const [isIncomeOpen, setIsIncomeOpen] = useState(false)
  const [isExpenseOpen, setIsExpenseOpen] = useState(false)
  const [isReceiptOpen, setIsReceiptOpen] = useState(false)

  const totalExpense = 1200
  const totalIncome = 2000
  const remainingBudget = totalIncome - totalExpense

  const handleAddExpense = () => {
    console.log("Expense:", expenseInput)
    setExpenseInput({ amount: "", category: "", date: new Date() })
  }

  const handleAddIncome = () => {
    console.log("Income:", incomeInput)
    setIncomeInput({ ...incomeInput, amount: "", category: "", date: new Date() })
  }

  const handleAddReceipt = () => {
    console.log("Receipt:", receiptInput)
    setReceiptInput({ file: null, description: "", category: "" })
  }

  return (
    <div className="grid gap-8 grid-cols-1 xl:grid-cols-2 text-white font-sans">
      {/* Overview */}
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
              <p className="text-gray-400 text-xl">{item.label}</p>
              <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>₹{item.value}</h2>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="col-span-full bg-[#1a1a1a] border border-[#2a2a2a] shadow rounded-2xl">
        <CardContent className="p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-teal-400 tracking-tight">Quick Action</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Add Income */}
            <Dialog open={isIncomeOpen} onOpenChange={setIsIncomeOpen}>
              <DialogTrigger asChild>
                <Button
                  className="w-full bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-[#333] text-white text-lg font-medium p-6"
                >
                  + Add Income
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#141414] text-white border border-[#2a2a2a] rounded-2xl px-8 py-6 max-w-md shadow-xl">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl font-bold text-green-400">Add New Income</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Amount</label>
                    <Input
                      placeholder="e.g. 5000"
                      className="bg-[#1f1f1f] text-white py-3 border border-[#333]"
                      value={incomeInput.amount}
                      onChange={(e) => setIncomeInput({ ...incomeInput, amount: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Category</label>
                    <Select
                      onValueChange={(value) => setIncomeInput({ ...incomeInput, category: value })}
                    >
                      <SelectTrigger className="w-full bg-[#1f1f1f] text-white py-3 border border-[#333]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1f1f1f] border border-[#2a2a2a] text-white">
                        {["Salary", "Freelance", "Investments", "Bonus", "Refund", "Other"].map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-[#1f1f1f] text-white py-3 border border-[#333]"
                        >
                          <CalendarIcon className="mr-2 h-5 w-5 opacity-70" />
                          {format(incomeInput.date, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="border-none bg-[#1f1f1f]">
                      <Calendar
                          mode="single"
                          selected={expenseInput.date}
                          onSelect={(date) =>
                            date && setExpenseInput({ ...expenseInput, date })
                          }
                          className="rounded-md bg-[#1f1f1f] text-white"
                          initialFocus
                        />

                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button
                    onClick={() => {
                      handleAddIncome()
                      setIsIncomeOpen(false)
                    }}
                    className="w-full bg-green-600 hover:bg-green-500 text-white py-3"
                  >
                    Add Income
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Add Expense */}
            <Dialog open={isExpenseOpen} onOpenChange={setIsExpenseOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-[#333] text-white text-lg font-medium p-6">
                  + Add Expenses
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#141414] text-white border border-[#2a2a2a] rounded-2xl px-8 py-6 max-w-md shadow-xl">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl font-bold text-red-400">Add New Expense</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Amount</label>
                    <Input
                      placeholder="e.g. 250"
                      className="bg-[#1f1f1f] text-white py-3 border border-[#333]"
                      value={expenseInput.amount}
                      onChange={(e) => setExpenseInput({ ...expenseInput, amount: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Category</label>
                    <Select
                      onValueChange={(value) => setExpenseInput({ ...expenseInput, category: value })}
                    >
                      <SelectTrigger className="w-full bg-[#1f1f1f] text-white py-3 border border-[#333]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1f1f1f] border border-[#2a2a2a] text-white">
                        {["Food", "Travel", "Shopping", "Bills", "Supplies", "Health", "Entertainment", "Other"].map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-[#1f1f1f] text-white py-3 border border-[#333]"
                        >
                          <CalendarIcon className="mr-2 h-5 w-5 opacity-70" />
                          {format(expenseInput.date, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="border-none bg-[#1f1f1f]">
                      <Calendar
                          mode="single"
                          selected={expenseInput.date}
                          onSelect={(date) =>
                            date && setExpenseInput({ ...expenseInput, date })
                          }
                          className="rounded-md bg-[#1f1f1f] text-white"
                          initialFocus
                        />

                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button
                    onClick={() => {
                      handleAddExpense()
                      setIsExpenseOpen(false)
                    }}
                    className="w-full bg-red-500 hover:bg-red-400 text-white py-3"
                  >
                    Add Expense
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Add Receipt */}
            <Dialog open={isReceiptOpen} onOpenChange={setIsReceiptOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-[#333] text-white text-lg font-medium p-6">
                  + Add Receipt
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#141414] text-white border border-[#2a2a2a] rounded-2xl px-8 py-6 max-w-md shadow-xl">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl font-bold text-blue-400">Upload Receipt</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-md font-semibold text-gray-300">Upload File</label>
                    <div className="relative">
                      <input
                        id="fileUpload"
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null
                          if (file && file.size > 2 * 1024 * 1024) {
                            alert("File size exceeds 2MB.")
                            return
                          }
                          setReceiptInput({ ...receiptInput, file })
                        }}
                        className="hidden"
                      />
                      <label
                        htmlFor="fileUpload"
                        className="block w-full cursor-pointer bg-[#1f1f1f] text-white py-3 px-4 border border-[#333] rounded-md hover:bg-[#2a2a2a]"
                      >
                        {receiptInput.file ? `Selected: ${receiptInput.file.name}` : "Choose File"}
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Description</label>
                    <Input
                      placeholder="e.g. Office Supplies"
                      value={receiptInput.description}
                      onChange={(e) =>
                        setReceiptInput({ ...receiptInput, description: e.target.value })
                      }
                      className="bg-[#1f1f1f] text-white py-3 border border-[#333]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-md font-semibold text-gray-300">Category</label>
                    <Select
                      onValueChange={(value) =>
                        setReceiptInput({ ...receiptInput, category: value })
                      }
                    >
                      <SelectTrigger className="w-full bg-[#1f1f1f] text-white py-3 border border-[#333]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1f1f1f] text-white border border-[#2a2a2a]">
                        {["Borrow", "Due"].map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button
                    onClick={() => {
                      handleAddReceipt()
                      setIsReceiptOpen(false)
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3"
                  >
                    Upload Receipt
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="col-span-full bg-[#1a1a1a] border border-[#2a2a2a] shadow rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">Recent Transactions</h3>
          <ul className="divide-y divide-[#2a2a2a]">
            {recentTransactions.map((tx, idx) => (
              <li key={idx} className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <span className="text-white font-medium text-lg">{tx.title}</span>
                  <span className="text-sm text-gray-500">{tx.category}</span>
                </div>
                <div className="text-right">
                  <span className="text-white font-semibold text-lg">₹{tx.amount}</span>
                  <div className="text-sm text-gray-500">{tx.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
