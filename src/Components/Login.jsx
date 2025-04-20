import { useState } from "react"
import Brandingimg from "../assets/expensio-branding.png"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "@/helper/supabaseClient"


function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMassage] = useState("");
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMassage(error.message);
      setEmail("")
      setPassword("")
      return;
    }

    if (data) {
      navigate("/Dashboard")
      return null;
    }
   
  };

  return (
    <div className="flex h-screen bg-[#141414] p-4 sm:p-0">
      {/* Left side - Image and branding */}
      <div className="relative hidden w-full md:w-1/2 flex-col justify-between lg:flex">
        <img
          src={Brandingimg}
          alt="Expensio branding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 rounded-xl" />
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-white font-bold text-7xl text-shadow-lg tracking-wide">Expensio</h1>
          <p className="text-white font-medium text-3xl mt-4 text-shadow-md">Track Smarter. Spend Better.</p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full flex-col justify-center lg:w-1/2 lg:px-12 text-white">
        <div className="mx-auto w-full max-w-lg sm:max-w-3xl rounded-xl bg-[#1a1a1a] p-8 shadow-lg sm:border-0 sm:bg-transparent sm:shadow-none lg:border-0 lg:bg-transparent lg:shadow-none">
          <h1 className="mb-6 text-3xl sm:text-4xl font-bold text-white">Welcome&nbsp;back</h1>
          <p className="mb-8 -mt-1 text-lg text-gray-300">
            Don't have an account?{" "}
            <Link to="/Signup" className="text-teal-400 hover:underline">
              Create one
            </Link>
          </p>
          {message && <span> {message} </span>}
          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400"
            />

            <div className="relative">
              <input
                name="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>


            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-400 text-white py-3 px-6 rounded-md font-medium"
            >
              Log in
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-[#1a1a1a] px-3 text-gray-300 sm:bg-[#141414]">Or log in with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <button
                type="button"
                className="flex items-center justify-center gap-3 border border-gray-600 rounded-md py-3 px-6 text-white hover:bg-gray-800"
              >
                <GoogleIcon aria-hidden="true" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 border border-gray-600 rounded-md py-3 px-6 text-white hover:bg-gray-800"
              >
                <AppleIcon aria-hidden="true" />
                Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Icon components (same as SignupPage)

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
}

function GoogleIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" {...props}>
      <path fill="#EA4335" d="M5.27 9.76C6.2 6.94 8.85 4.91 12 4.91c1.69 0 3.22.6 4.42 1.58L19.91 3C17.78 1.15 15.05 0 12 0 7.27 0 3.2 2.7 1.24 6.65l4.03 3.11z" />
      <path fill="#34A853" d="M16.04 18.01c-1.09.7-2.48 1.08-4.04 1.08-3.13 0-5.78-2.01-6.72-4.82L1.24 17.33C3.19 21.29 7.27 24 12 24c2.93 0 5.74-1.04 7.83-3l-3.79-2.99z" />
      <path fill="#4A90E2" d="M19.83 21c2.2-2.05 3.63-5.1 3.63-9 0-.71-.11-1.47-.27-2.18H12v4.64h6.44c-.32 1.55-1.17 2.76-2.4 3.57L19.83 21z" />
      <path fill="#FBBC05" d="M5.28 14.27c-.24-.71-.37-1.48-.37-2.27 0-.78.13-1.53.36-2.28L1.24 6.65C.44 8.26 0 10.08 0 12c0 1.92.44 3.74 1.24 5.33l4.04-3.06z" />
    </svg>
  )
}

function AppleIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M12.15 6.9c-.95 0-2.42-1.08-3.96-1.04-2.04.03-3.91 1.18-4.96 3.01-2.12 3.68-.55 9.1 1.52 12.1 1.01 1.45 2.2 3.09 3.79 3.04 1.52-.07 2.09-.99 3.94-.99 1.83 0 2.35.99 3.96.95 1.64-.03 2.68-1.48 3.68-2.95 1.15-1.69 1.64-3.33 1.66-3.42-.04-.01-3.18-1.22-3.22-4.86-.03-3.04 2.48-4.49 2.6-4.56-1.43-2.09-3.62-2.32-4.39-2.38-2-.16-3.67 1.09-4.61 1.09zM15.53 3.83c.84-1.01 1.4-2.43 1.24-3.83-1.21.05-2.66.8-3.53 1.82-.78.89-1.45 2.34-1.27 3.71 1.34.1 2.71-.69 3.56-1.7z" />
    </svg>
  )
}

export default LoginPage
