"use client";

import * as React from "react";

type Toast = {
  id: number;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

type ToastContextType = {
  toast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = React.createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = (newToast: Omit<Toast, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, ...newToast }]);

    // Auto-dismiss after 3s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-3 z-[9999]">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`w-80 rounded-lg border p-4 shadow-lg transition-all ${
              t.variant === "destructive"
                ? "bg-red-600 text-white border-red-700"
                : "bg-white text-black border-gray-200"
            }`}
          >
            {t.title && <div className="font-semibold">{t.title}</div>}
            {t.description && (
              <div className="text-sm opacity-80">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx.toast;
}
