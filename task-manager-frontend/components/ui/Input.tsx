type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900
      placeholder:text-slate-400
      focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600
      ${className}`}
    />
  );
}
