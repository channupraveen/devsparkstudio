import { motion } from "framer-motion";
import { useRef, MouseEvent, ReactNode, ButtonHTMLAttributes } from "react";

interface MagneticButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  as?: "button" | "a";
  href?: string;
}

const MagneticButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate(0px, 0px)`;
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-nebula-500 via-cosmic-500 to-nebula-500 text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)] hover:shadow-[0_0_50px_-5px_rgba(168,85,247,0.7)] bg-[length:200%_100%] hover:bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position,box-shadow] duration-700 ease-premium",
    ghost:
      "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-border",
    outline:
      "bg-transparent border border-border/70 text-foreground hover:border-primary/60 hover:bg-primary/5",
  }[variant];

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2 font-medium rounded-full btn-shimmer transition-all duration-300 ease-premium will-change-transform ${sizeClasses} ${variantClasses} ${className}`}
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-position 0.7s, box-shadow 0.5s" }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
