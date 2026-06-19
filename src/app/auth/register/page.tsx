"use client";
import { registerUser } from "@/lib/auth";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Phone,
  UserPlus,
  Chrome,
} from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("customer");

  const [formData, setFormData] = useState({
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);

      const data = await registerUser(
        formData.username,
        formData.password,
        role
      );

      alert(data.message);

    } catch (error) {
      console.error(error);
      alert("Registration failed");
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
            Create Account
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base">
            Join us to start managing your inventory efficiently
          </p>
        </div>

        {/* Card */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 px-6 sm:py-8 shadow-sm">

          {/* Card Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">
                Create New Account
              </h2>
            </div>

            <p className="text-muted-foreground text-sm">
              Fill in the details below to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Phone
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Phone Number
              </label>

              <div className="flex gap-2">
                <div className="flex items-center px-3 py-2 rounded-md border border-border bg-background">
                  <span className="text-sm font-medium text-muted-foreground">
                    🇮🇳 +91
                  </span>
                </div>

                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
            </div> */}

            {/* Username */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Username
              </label>

              <div className="relative">
                <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <input
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />
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

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Confirm Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-10 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex gap-3 cursor-pointer text-muted-foreground text-sm">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 accent-primary"
              />
              I agree to the{" "}
              <Link href="/terms" className="underline hover:text-foreground">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </Link>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-10 font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Creating..." : "Create Account"}
            </button>

          </form>

          {/* Social */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-border bg-background py-2 hover:bg-primary/10 transition cursor-pointer"
          >
            <Chrome className="h-4 w-4" />
            Sign up with Google
          </button>

        </div>

        {/* Login */}
        <div className="text-center mt-6 text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold hover:text-foreground underline"
          >
            Sign in
          </Link>
        </div>

      </div>
    </div>
  );
}