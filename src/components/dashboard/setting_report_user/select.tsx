"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

// ================== Context ==================
type SelectContextType = {
  value: string | null;
  setValue: (val: string) => void;
  open: boolean;
  setOpen: (o: boolean) => void;
};

const SelectContext = React.createContext<SelectContextType | undefined>(undefined);

function useSelectContext() {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error("Select components must be used inside <Select>");
  return ctx;
}

// ================== Root ==================
interface SelectProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "value" | "defaultValue" | "children"
  > {
  value?: string | null; // controlled
  defaultValue?: string | null; // uncontrolled initial
  onValueChange?: (val: string) => void;
  children?: React.ReactNode;
}


const Select: React.FC<SelectProps> = ({
  value,
  defaultValue = null,
  onValueChange,
  children,
  ...props
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string | null>(defaultValue ?? null);
  const [open, setOpen] = React.useState(false);

  // currentValue resolves to controlled value when provided, otherwise internal state
  const currentValue = isControlled ? (value as string | null) : internalValue;

  const handleSetValue = React.useCallback(
    (val: string) => {
      if (!isControlled) setInternalValue(val);
      onValueChange?.(val);
      setOpen(false);
    },
    [isControlled, onValueChange]
  );

  const ctx = React.useMemo(
    () => ({ value: currentValue, setValue: handleSetValue, open, setOpen }),
    [currentValue, handleSetValue, open]
  );

  return (
    <SelectContext.Provider value={ctx}>
      <div className="relative inline-block w-full" {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};

// ================== Trigger ==================
interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { value, open, setOpen } = useSelectContext();

    // Show the selected value if present; otherwise render children (usually <SelectValue />) or a fallback
    const content = value ?? children ?? "Select an option";

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-[#213322] bg-[#091315] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        {...props}
      >
        <span className="truncate">{content}</span>
        {open ? <ChevronUp className="h-4 w-4 opacity-50" /> : <ChevronDown className="h-4 w-4 opacity-50" />}
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

// ================== Value ==================
const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { value } = useSelectContext();
  return <span>{value ?? placeholder ?? "Select an option"}</span>;
};

// ================== Content ==================
interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(({ className, children, ...props }, ref) => {
  const { open } = useSelectContext();
  if (!open) return null;

  return (
    <div
      ref={ref}
      role="listbox"
      className={cn(
        "absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-md border bg-[#2c482e] text-[#f2f2f2] shadow-md",
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
});
SelectContent.displayName = "SelectContent";

// ================== Item ==================
interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(({ className, children, value, ...props }, ref) => {
  const { value: selected, setValue } = useSelectContext();
  const isSelected = selected === value;

  return (
    <button
      ref={ref}
      type="button"
      role="option"
      aria-selected={isSelected}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm hover:bg-[#8ba47d] hover:text-[#1a1a1a] focus:bg-[#8ba47d] focus:text-[#1a1a1a]",
        isSelected && "bg-[#8ba47d] text-[#1a1a1a]",
        className
      )}
      onClick={() => setValue(value)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      {children}
    </button>
  );
});
SelectItem.displayName = "SelectItem";

// ================== Helpers ==================
const SelectGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("p-1", className)} {...props} />
);

const SelectLabel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
);

const SelectSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("-mx-1 my-1 h-px bg-[#172a1d]", className)} {...props} />
);

const SelectScrollUpButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex cursor-default items-center justify-center py-1", className)} {...props}>
    <ChevronUp className="h-4 w-4" />
  </div>
);

const SelectScrollDownButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex cursor-default items-center justify-center py-1", className)} {...props}>
    <ChevronDown className="h-4 w-4" />
  </div>
);

// ================== Exports ==================
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
