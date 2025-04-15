// src/components/Sidebar.jsx
import { useState } from "react"
import {
  Home,
  Receipt,
  Plane,
  BadgeCheck,
  Settings,
  Phone,
  Menu,
} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "../components/ui/drawer"

const navItems = [
  { name: "Home", icon: Home },
  { name: "Expenses", icon: Receipt },
  { name: "Trips", icon: Plane },
  { name: "Approvals", icon: BadgeCheck },
  { name: "Settings", icon: Settings },
  { name: "Support", icon: Phone },
]

export default function Sidebar() {
  const [active, setActive] = useState("Home")

  const SidebarContent = ({ onLinkClick }) => (
    <div className="h-full w-64 bg-[#0f0f0f] text-white flex flex-col justify-between px-4 py-6">
      {/* Avatar */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/40" />
            <AvatarFallback className="text-black font-bold">HS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Hetansh Sachaniya</p>
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
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors w-full text-left ${active === name
                ? "bg-[#1a1a1a] text-teal-400"
                : "hover:bg-[#1f1f1f] text-gray-300"
                }`}
            >
              <Icon size={18} />
              {name}
            </button>
          ))}
        </nav>
      </div>

      {/* Branding */}
      <div className="text-center">
        <h1 className="font-bold text-xl tracking-wider">
          <span className="text-teal-400">EXPEN</span>
          <span className="text-white">SIO</span>
        </h1>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile: Drawer */}
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

      {/* Desktop: Fixed Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen w-64 z-40">
        <SidebarContent />
      </div>
    </>
  )
}
