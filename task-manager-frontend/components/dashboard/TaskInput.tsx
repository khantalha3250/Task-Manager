interface TaskInputProps {
  value: string;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

export default function TaskInput({
  value,
  onChange,
  onAdd,
  loading,
}: TaskInputProps) {
  return (
    <div className="flex gap-2 mb-4">
      <input
  type="text"
  placeholder="What do you want to work on?"
  className="flex-1 rounded-lg border border-gray-300 px-4 py-2
  text-gray-600 placeholder-gray-400
  focus:outline-none focus:ring-2 focus:ring-indigo-500"
  value={value}
  onChange={onChange}
/>

      <button
        onClick={onAdd}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm
        font-medium text-white hover:bg-indigo-700 disabled:opacity-60"
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
}
