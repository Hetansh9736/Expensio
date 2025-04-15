import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Auth() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#121212]">
      <div className="w-[400px] space-y-6 bg-[#1E1E1E] text-white p-6 rounded-2xl shadow-lg">
        {/* Welcome Text */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Welcome</h1>
          <p className="text-gray-400 text-sm">
            Login to your account or sign up to get started
          </p>
        </div>

        {/* Tabs */}  
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#2C2C2C] rounded-lg mb-4">
            <TabsTrigger
              value="login"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black rounded-lg py-2 transition"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black rounded-lg py-2 transition"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>


          {/* Login Form */}
          <TabsContent value="login">
            <Card className="bg-transparent text-white shadow-none border-none">
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-[#2C2C2C] text-white border-none"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#2C2C2C] text-white border-none"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-black hover:bg-gray-300 rounded-full">
                  Login
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup">
            <Card className="bg-transparent text-white shadow-none border-none">
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="signup-name">Name</Label>
                  <Input
                    id="signup-name"
                    placeholder="John Doe"
                    className="bg-[#2C2C2C] text-white border-none"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-[#2C2C2C] text-white border-none"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                    className="bg-[#2C2C2C] text-white border-none"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-black hover:bg-gray-300 rounded-full">
                  Sign Up
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>



  )
}
