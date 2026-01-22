type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium
      hover:bg-indigo-700 transition
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}`}
    >
      {children}
    </button>
  );
}
