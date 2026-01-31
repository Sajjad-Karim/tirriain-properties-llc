/** Modern logo mark – abstract roof + building for real estate */

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "light" | "dark" | "primary";
}

const variantClasses = {
  light: "text-white",
  dark: "text-foreground",
  primary: "text-primary",
};

export const Logo = ({ className = "", size = 32, variant = "primary" }: LogoProps) => {
  const cn = variantClasses[variant];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${cn} ${className}`}
      aria-hidden
    >
      {/* Roof */}
      <path
        d="M16 2L4 14h3v14h6v-8h6v8h6V14h3L16 2z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};
