import { useState } from "react";
import Brandingimg from "../assets/expensio-branding.png";
import { supabase } from "@/helper/supabaseClient";
import { Link } from "react-router-dom";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setMessage(`Signup failed: ${signUpError.message}`);
      return;
    }

    const user = signUpData?.user;
    if (!user) {
      setMessage("Signup succeeded but no user object returned.");
      return;
    }

    const { error: insertError } = await supabase
      .from("user")
      .insert([
        {
          id: user.id,
          firstname: firstName,
          lastname: lastName,
        },
      ]);

    if (insertError) {
      setMessage(`Signup succeeded but saving user info failed: ${insertError.message}`);
      return;
    }

    setMessage("Signup successful and user info saved!");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="flex h-screen bg-[#141414] p-4 sm:p-0">
      {/* Left - Branding */}
      <div className="relative hidden w-full md:w-1/2 flex-col justify-between lg:flex">
        <img
          src={Brandingimg}
          alt="Expensio branding"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1 className="text-white font-bold text-7xl">Expensio</h1>
          <p className="text-white font-medium text-3xl mt-4">Track Smarter. Spend Better.</p>
        </div>
      </div>

      {/* Right - Signup form */}
      <div className="flex w-full flex-col justify-center lg:w-1/2 lg:px-12 text-white">
        <div className="mx-auto w-full max-w-lg sm:max-w-3xl rounded-xl bg-[#1a1a1a] p-8 shadow-lg sm:border-0 sm:bg-transparent sm:shadow-none lg:border-0 lg:bg-transparent lg:shadow-none">
          <h1 className="mb-6 text-3xl sm:text-4xl font-bold text-white">Create an account</h1>
          <p className="mb-8 -mt-1 text-lg text-gray-300">
            Already have an account?{" "}
            <Link to="/" className="text-teal-400 hover:underline">Log in</Link>
          </p>

          {message && <span className="text-yellow-400">{message}</span>}

          <form className="space-y-4 mt-4" onSubmit={handleSignUp}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            <label className="flex items-center text-sm text-gray-300 space-x-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="form-checkbox text-teal-400"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-teal-400 hover:underline">Terms & Conditions</a>
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed}
              className="w-full bg-teal-500 hover:bg-teal-400 text-white py-3 px-6 rounded-md font-medium disabled:opacity-50"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Reuse icon components
function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}

export default SignupPage;
