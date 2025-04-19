import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Auth() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#121212] text-white font-poppins">
      <div className="w-[480px] bg-[#1E1E1E] p-8 rounded-2xl shadow-xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-lg text-gray-400">Login to your account or sign up to get started</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="flex bg-[#2A2A2A] rounded-full  mb-6 w-full">
            <TabsTrigger
              value="login"
              className="flex-1 text-lg text-gray-300 font-medium rounded-full py-4 data-[state=active]:bg-[#10B981] data-[state=active]:text-black transition-all"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="flex-1 text-lg text-gray-300 font-medium rounded-full py-4 data-[state=active]:bg-[#10B981] data-[state=active]:text-black transition-all"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" className="bg-[#2C2C2C] text-white text-lg border-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-lg">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" className="bg-[#2C2C2C] text-white text-lg border-none" />
              </div>
              <Button type="submit" className="w-full bg-[#10B981] text-black hover:bg-[#0fa76d] rounded-full py-3 text-lg">
                Login
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">Name</Label>
                <Input id="name" placeholder="John Doe" className="bg-[#2C2C2C] text-white text-lg border-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-lg">Email</Label>
                <Input id="signup-email" type="email" placeholder="you@example.com" className="bg-[#2C2C2C] text-white text-lg border-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-lg">Password</Label>
                <Input id="signup-password" type="password" placeholder="Create a password" className="bg-[#2C2C2C] text-white text-lg border-none" />
              </div>
              <Button type="submit" className="w-full bg-[#10B981] text-black hover:bg-[#0fa76d] rounded-full py-3 text-lg">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
