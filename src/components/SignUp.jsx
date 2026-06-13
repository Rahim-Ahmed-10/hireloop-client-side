"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client"; // আপনার Better Auth ক্লায়েন্ট পাথ নিশ্চিত করুন
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation"; 
import { FcGoogle } from "react-icons/fc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiResetRightLine } from "react-icons/ri";

export default function SignUpPage() {
  const router = useRouter();
  
  // এরর, সাকসেস এবং লোডিং স্টেট
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ইমেইল ও পাসওয়ার্ড দিয়ে সাইন-আপ হ্যান্ডলার
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Better Auth এর মাধ্যমে MongoDB-তে ইউজার ক্রিয়েট করার লজিক
      const { data, error: authError } = await authClient.signUp.email({
        name,
        email,
        password,
        // আপনি চাইলে image বা অন্য কোনো কাস্টম ফিল্ড এখানে পাঠাতে পারেন
      });

      if (!authError) {
        setSuccess("Registration Successful! Redirecting...");
        // সফল হলে ২ সেকেন্ড পর হোম পেজ বা লগইন পেজে রিডাইরেক্ট করতে পারেন
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setError(authError.message || "Something went wrong during signup.");
      }
    } catch (err) {
      console.error("Signup unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // গুগল সোশ্যাল লগইন হ্যান্ডলার
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        // সফল লগইনের পর ইউজার কোথায় যাবে তা Better Auth কনফিগারেশন হ্যান্ডেল করে
      });
    } catch (err) {
      console.error("Google Login Error:", err);
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center p-6">
      <Card className="bg-[#1e293b]/60 backdrop-blur-md border border-gray-800 shadow-2xl w-full max-w-lg p-8 md:p-12 rounded-3xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tight italic uppercase">
            Get <span className="text-[#ff5200]">Started</span>
          </h1>
          <div className="h-1 w-16 bg-[#ff5200] mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-sm uppercase tracking-widest">
            Join HireLoop Essentials
          </p>
        </div>

        {/* Dynamic Alert Messages */}
        <div className="flex flex-col gap-3 mb-4">
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm p-4 rounded-xl text-center font-medium">
              ⚠️ {error}
            </div>
          )}
          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm p-4 rounded-xl text-center font-medium">
              ✅ {success}
            </div>
          )}
        </div>

        {/* HeroUI Form Wrapper */}
        <Form className="flex flex-col gap-6" onSubmit={onSubmit} validationBehavior="native">
          
          {/* Name Field */}
          <TextField isRequired name="name" type="text" className="group">
            <Label className="text-gray-300 font-semibold mb-1 block">Full Name</Label>
            <Input 
              placeholder="Enter your name" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-xl focus:border-[#ff5200] transition-all"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-300 font-semibold mb-1 block">Email Address</Label>
            <Input 
              placeholder="Enter your email" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-xl"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need at least one number";
              return null;
            }}
          >
            <Label className="text-gray-300 font-semibold mb-1 block">Password</Label>
            <Input 
              placeholder="••••••••" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-xl"
            />
            <Description className="text-gray-500 text-[10px] mt-1 leading-tight uppercase tracking-tighter">
              Min 8 chars, 1 Uppercase, 1 Number
            </Description>
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Action Buttons Section */}
          <div className="flex gap-4 mt-4">
            <Button 
              type="submit" 
              isLoading={isLoading}
              className="flex-1 bg-[#ff5200] hover:bg-[#e64a00] text-white font-bold py-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-900/20 uppercase tracking-wider text-sm"
            >
              <IoMdCheckmarkCircleOutline />
              Sign Up
            </Button>
            
            <Button 
              type="reset" 
              variant="flat"
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-6 rounded-xl px-6"
            >
              <RiResetRightLine />
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-2 w-full">
            <div className="flex-1 h-[1px] bg-gray-800"></div>
            <span className="flex-shrink text-center mx-4 text-gray-600 text-xs uppercase font-bold">OR</span>
            <div className="flex-1 h-[1px] bg-gray-800"></div>
          </div>

          {/* Google Button */}
          <Button 
            variant="bordered"
            onClick={handleGoogleLogin}
            className="w-full border-gray-700 text-gray-300 font-bold py-6 rounded-2xl hover:bg-gray-800 transition-all uppercase text-xs"
          >
              <FcGoogle size={20} />
            Continue with Google
          </Button>
          
          {/* Back to Login Navigation */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account?{" "}
            <span 
              className="text-[#ff5200] cursor-pointer hover:underline font-semibold transition-colors"
              onClick={() => router.push("/sign-in")} // আপনার লগইন পেজের সঠিক পাথ দিন
            >
              Sign In
            </span>
          </p>
        </Form>
      </Card>
    </div>
  );
}