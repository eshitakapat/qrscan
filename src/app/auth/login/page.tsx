
"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  LogIn,
  Chrome,
} from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [role, setRole] = useState("admin");

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Login attempt:", {
        ...formData,
        role,
      });

      // Role-based routing
      if (role === "admin") {
        router.push("/dashboard");
      }

      if (role === "employee") {
        router.push("/admin/dashboard");
      }

      if (role === "customer") {
        router.push("/customer/detailsPage");
      }

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8 space-y-2 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Welcome Back!
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base">
            Access your dashboard to manage inventory and track updates
          </p>
        </div>

        {/* Card */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 px-6 sm:py-8 shadow-sm">

          {/* Card Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <LogIn className="h-5 w-5 text-muted-foreground" />

              <h2 className="text-xl font-semibold">
                Sign Into Account
              </h2>
            </div>

            <p className="text-muted-foreground text-sm">
              Enter your credentials to access your dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-10 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Account Type */}
            <div className="space-y-3">
              <label className="block text-sm font-medium">
                Account Type
              </label>

              <div className="space-y-2">

                {/* Admin */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === "admin"}
                    onChange={(e) => setRole(e.target.value)}
                    className="h-4 w-4 accent-green-500"
                  />

                  <span>Admin / Owner</span>
                </label>

                {/* Employee */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="employee"
                    checked={role === "employee"}
                    onChange={(e) => setRole(e.target.value)}
                    className="h-4 w-4 accent-green-500"
                  />

                  <span>Employee</span>
                </label>

                {/* Customer */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={role === "customer"}
                    onChange={(e) => setRole(e.target.value)}
                    className="h-4 w-4 accent-green-500"
                  />

                  <span>Customer</span>
                </label>

              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-muted-foreground hover:text-foreground underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-2">
            <div className="border-t border-border" />

            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-card px-2 text-xs text-muted-foreground">
              OR
            </span>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md border border-border bg-background py-2 hover:bg-primary/10 transition cursor-pointer"
            >
              <Chrome className="h-4 w-4" />
              Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md border border-border bg-background py-2 hover:bg-primary/10 transition cursor-pointer"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.445 2.914 1.104.092-.859.35-1.445.636-1.777-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.021A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.021 2.747-1.021.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>

              GitHub
            </button>

          </div>

        </div>

        {/* Register */}
        <div className="text-center mt-6 text-muted-foreground text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold hover:text-foreground underline"
          >
            Create one now
          </Link>
        </div>

      </div>
    </div>
  );
}

