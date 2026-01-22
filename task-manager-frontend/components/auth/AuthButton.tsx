interface Props {
  text: string;
  loading?: boolean;
}

export default function AuthButton({ text, loading }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full mt-2 rounded-lg bg-indigo-600 py-2.5
      text-sm font-semibold text-white hover:bg-indigo-700 transition
      disabled:opacity-60"
    >
      {loading ? "Please wait..." : text}
    </button>
  );
}
