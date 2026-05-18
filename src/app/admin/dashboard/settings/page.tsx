"use client";

import { useState } from "react";

import {
  User,
  Bell,
  Palette,
  Shield,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-[#202940] text-[#CAAA98]">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#CAAA98]">
          Settings
        </h1>

        <p className="mt-2 text-sm text-[#9A8678]">
          Manage your account preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        
        {[
          {
            id: "profile",
            label: "Profile",
            icon: User,
          },
          {
            id: "notifications",
            label: "Notifications",
            icon: Bell,
          },
          {
            id: "appearance",
            label: "Appearance",
            icon: Palette,
          },
          {
            id: "security",
            label: "Security",
            icon: Shield,
          },
        ].map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2
                rounded-xl
                border
                px-5 py-2.5
                text-sm font-medium
                transition-all duration-300

                ${
                  activeTab === tab.id
                    ? "border-[#CAAA98] bg-[#4B4038] text-[#CAAA98]"
                    : "border-[#4B4038] bg-[#202940] text-[#9A8678] hover:bg-[#4B4038] hover:text-[#CAAA98]"
                }
              `}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Settings Card */}
      <div
        className="
          rounded-3xl
          border border-[#4B4038]
          bg-[#202940]
          shadow-xl
        "
      >
        
        {/* Card Header */}
        <div className="border-b border-[#4B4038] p-6">
          
          <div className="flex items-center gap-3">
            <User className="text-[#CAAA98]" />

            <div>
              <h2 className="text-2xl font-semibold text-[#CAAA98]">
                Profile Information
              </h2>

              <p className="mt-1 text-sm text-[#9A8678]">
                Manage your personal information
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* User Profile */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center">
            
            {/* Avatar */}
            <div
              className="
                flex h-28 w-28 items-center justify-center
                rounded-full
                border border-[#4B4038]
                bg-[#4B4038]/30
              "
            >
              <User size={50} className="text-[#CAAA98]" />
            </div>

            {/* User Info */}
            <div>
              <h3 className="text-2xl font-semibold text-[#CAAA98]">
                Jane Smith
              </h3>

              <p className="mt-1 text-sm text-[#9A8678]">
                Employee
              </p>

              <button
                className="
                  mt-4
                  rounded-xl
                  border border-[#4B4038]
                  bg-[#202940]
                  px-5 py-2
                  text-sm font-medium
                  text-[#CAAA98]
                  transition hover:bg-[#4B4038]
                "
              >
                Change Avatar
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8 border-t border-[#4B4038]" />

          {/* Form */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* First Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#CAAA98]">
                First Name
              </label>

              <input
                type="text"
                defaultValue="Jane"
                className="
                  w-full rounded-2xl
                  border border-[#4B4038]
                  bg-[#202940]
                  px-4 py-3
                  text-[#CAAA98]
                  outline-none
                  transition
                  placeholder:text-[#9A8678]
                  focus:border-[#CAAA98]
                "
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#CAAA98]">
                Last Name
              </label>

              <input
                type="text"
                defaultValue="Smith"
                className="
                  w-full rounded-2xl
                  border border-[#4B4038]
                  bg-[#202940]
                  px-4 py-3
                  text-[#CAAA98]
                  outline-none
                  transition
                  placeholder:text-[#9A8678]
                  focus:border-[#CAAA98]
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#CAAA98]">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="jane.smith@example.com"
                className="
                  w-full rounded-2xl
                  border border-[#4B4038]
                  bg-[#202940]
                  px-4 py-3
                  text-[#CAAA98]
                  outline-none
                  transition
                  placeholder:text-[#9A8678]
                  focus:border-[#CAAA98]
                "
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#CAAA98]">
                Phone Number
              </label>

              <input
                type="text"
                defaultValue="+1 (555) 987-6543"
                className="
                  w-full rounded-2xl
                  border border-[#4B4038]
                  bg-[#202940]
                  px-4 py-3
                  text-[#CAAA98]
                  outline-none
                  transition
                  placeholder:text-[#9A8678]
                  focus:border-[#CAAA98]
                "
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex justify-end
            border-t border-[#4B4038]
            p-6
          "
        >
          <button
            className="
              flex items-center gap-3
              rounded-2xl
              bg-[#CAAA98]
              px-6 py-3
              text-sm font-semibold
              text-[#202940]
              transition-all duration-300
              hover:scale-105
              hover:opacity-90
            "
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}