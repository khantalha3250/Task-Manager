import { TaskStatus } from "@/src/types/task";

interface TaskFiltersProps {
  search: string;
  status: "all" | TaskStatus;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function TaskFilters({
  search,
  status,
  onSearch,
  onStatusChange,
}: TaskFiltersProps) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search tasks..."
        className="flex-1 rounded-lg border text-gray-600 placeholder-gray-400 border-gray-300 px-4 py-2"
        value={search}
        onChange={onSearch}
      />

      <select
        className="rounded-lg text-gray-600 border border-gray-300 px-3 py-2"
        value={status}
        onChange={onStatusChange}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
