import { useState } from "react"
import {
  Home,
  BarChart,
  FileText,
  Calculator,
  HandCoins,
  Wallet,
  Settings,
  Menu,
} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../components/ui/drawer"

const navItems = [
  { name: "Home", icon: Home },
  { name: "Analysis", icon: BarChart },        
  { name: "Reports", icon: FileText },     
  { name: "EMI Planner", icon: Calculator },
  { name: "Loans & Borrows", icon: HandCoins }, 
  { name: "Dues", icon: Wallet },   
  { name: "Settings", icon: Settings },
];


export default function Sidebar() {
  const [active, setActive] = useState("Home")

  const SidebarContent = ({ onLinkClick }) => (
    <div className="h-full w-64 bg-[#0f0f0f] text-white flex flex-col justify-between px-5 py-6">
      {/* Profile */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://via.placeholder.com/40" />
            <AvatarFallback className="text-black font-semibold text-lg">HS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base font-semibold leading-tight">Hetansh Sachaniya</p>
          </div>  
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => {
                setActive(name)
                onLinkClick?.()
              }}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg text-[15px] font-medium transition w-full text-left ${active === name
                  ? "bg-[#1a1a1a] text-teal-400"
                  : "hover:bg-[#1f1f1f] text-gray-300"
                }`}
            >
              <Icon size={20} />
              {name}
            </button>
          ))}
        </nav>
      </div>

      {/* Logo */}
      <div className="text-center">
        <h1 className="font-bold text-3xl tracking-wide bg-gradient-to-r text-transparent bg-clip-text from-teal-400 to-blue-500">
          <span>EXPEN</span>
          <span className="text-white text-3xl font-semibold tracking-wider">SIO</span>
        </h1>

      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Drawer */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <button className="text-white p-2 bg-[#1a1a1a] rounded-md">
              <Menu size={24} />
            </button>
          </DrawerTrigger>
          <DrawerContent
            side="left"
            className="p-0 h-screen w-[75vw] max-w-[260px] bg-[#0f0f0f] border-none"
          >
            <SidebarContent onLinkClick={() => document.activeElement.blur()} />
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-64 z-40">
        <SidebarContent />
      </div>
    </>
  )
}
