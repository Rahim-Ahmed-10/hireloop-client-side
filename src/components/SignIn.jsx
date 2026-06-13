"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client"; // আপনার Better Auth ক্লায়েন্ট পাথ নিশ্চিত করুন
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";

export default function SignInForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // এরর, সাকসেস, পাসওয়ার্ড ভিজিবিলিটি এবং লোডিং স্টেট
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // রিডাইরেক্ট পাথ হ্যান্ডলিং
  const redirectPath = searchParams.get("redirect") || "/";
  const toggleVisibility = () => setIsVisible(!isVisible);

  // ইমেইল ও পাসওয়ার্ড দিয়ে সাইন-ইন হ্যান্ডলার
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Better Auth এর মাধ্যমে সাইন-ইন লজিক
      const { data, error: authError } = await authClient.signIn.email({
        email,
        password,
        callbackURL: redirectPath,
      });

      if (!authError) {
        setSuccess("Welcome back! Entering store...");
        setTimeout(() => {
          router.push(redirectPath);
          router.refresh();
        }, 1500);
      } else {
        setError(authError.message || "Invalid email or password!");
      }
    } catch (err) {
      console.error("Login unexpected error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // গুগল সোশ্যাল লগইন হ্যান্ডলার
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      console.error("Google Login Error:", err);
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center p-6 font-sans">
      <Card className="bg-[#1e293b]/60 backdrop-blur-xl border border-gray-800 shadow-2xl w-full max-w-md p-8 md:p-12 rounded-[2rem]">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
            SIGN <span className="text-[#ff5200]">IN</span>
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mt-2">
            Welcome Back to HireLoop
          </p>
        </div>

        {/* Dynamic Alert Messages */}
        <div className="flex flex-col gap-3 mb-4">
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs p-3.5 rounded-xl text-center font-medium uppercase tracking-wider">
              ⚠️ {error}
            </div>
          )}
          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs p-3.5 rounded-xl text-center font-medium uppercase tracking-wider">
              ✅ {success}
            </div>
          )}
        </div>

        {/* HeroUI Form Wrapper */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit} validationBehavior="native">
          
          {/* Email Field */}
          <TextField isRequired name="email" type="email">
            <Label className="text-gray-400 text-xs uppercase font-bold mb-1 ml-1">
              Email Address
            </Label>
            <Input 
              placeholder="Your email address" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-2xl h-14"
              // আপনি নিজের পছন্দমতো react-icons থেকে startContent বা endContent এখানে বসাতে পারেন
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField isRequired name="password" type={isVisible ? "text" : "password"}>
            <div className="flex justify-between items-center mb-1">
              <Label className="text-gray-400 text-xs uppercase font-bold ml-1">
                Password
              </Label>
              <span className="text-[#ff5200] text-[10px] uppercase font-bold cursor-pointer hover:underline">
                Forgot?
              </span>
            </div>
            <Input 
              placeholder="••••••••" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-2xl h-14"
              // পাসওয়ার্ড শো/হাইড করার বাটন আইকন আপনি এখানে endContent হিসেবে সেট করতে পারেন
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Main Login Button */}
          <Button 
            type="submit" 
            isLoading={isLoading}
            disabled={isLoading}
            className="w-full bg-[#ff5200] hover:bg-[#e64a00] text-white font-black py-7 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-orange-900/20 uppercase tracking-widest mt-4"
          >
            <IoMdLogOut />
            {isLoading ? "Entering Store..." : "Enter Store"}
          </Button>

          {/* Divider */}
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-xs uppercase font-bold">OR</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          {/* Social Google Login Button */}
          <Button 
            variant="bordered"
            onClick={handleGoogleLogin}
            className="w-full border-gray-700 text-gray-300 font-bold py-6 rounded-2xl hover:bg-gray-800 transition-all uppercase text-xs"
          >
              <FcGoogle size={20} />
            Continue with Google
          </Button>
          
          {/* Footer Toggle Link */}
          <p className="text-center text-gray-500 text-xs mt-6 uppercase font-bold tracking-wider">
            New here?{" "}
            <span 
              onClick={() => router.push('/get-started')} // আপনার সাইন-আপ পেজের সঠিক পাথ দিন
              className="text-[#ff5200] cursor-pointer hover:text-white transition-colors"
            >
              Create Account
            </span>
          </p>
        </Form>
      </Card>
    </div>
  );
}