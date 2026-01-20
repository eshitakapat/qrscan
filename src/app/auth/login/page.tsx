"use client";

import { EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-white">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center">
          Welcome Back!
        </h1>
        <p className="text-sm text-gray-400 text-center mt-1">
          Build, test, and launch full-stack web and mobile apps
        </p>

        {/* Form */}
        <form className="mt-8 space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl bg-[#1a1a1a] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
          />

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-[#1a1a1a] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
            />
            <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-white text-black py-3 font-medium hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p className="text-sm text-center mt-4 text-gray-400 cursor-pointer hover:text-white">
          Forgot Password?
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="px-3 text-xs text-gray-400">
            or continue with
          </span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <button className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={18}
              height={18}
            />
          </button>

          <button className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <Image
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              width={18}
              height={18}
            />
          </button>
        </div>

        {/* Create Account */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don&apos;t have an account?
        </p>

        <button
          className="w-full mt-2 rounded-full bg-[#1a1a1a] py-3 text-sm hover:bg-[#2a2a2a] transition"
        >
          Create account
        </button>
      </div>
    </div>
  );
}
