import { Task } from "@/src/types/task";

interface TaskItemProps {
  task: Task;
  editing: boolean;
  editingTitle: string;
  onToggle: () => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TaskItem({
  task,
  editing,
  editingTitle,
  onToggle,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  onChangeTitle,
}: TaskItemProps) {
  return (
    <li className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          disabled={editing}
        />

        {editing ? (
          <input
            className="flex-1 rounded border px-2 py-1"
            value={editingTitle}
            onChange={onChangeTitle}
            autoFocus
          />
        ) : (
          <span
  className={`flex-1 text-gray-500 ${
    task.completed ? "line-through text-gray-400" : ""
  }`}
>
  {task.title}
</span>

        )}
      </div>

      <div className="flex gap-2 ml-3 text-sm">
        {editing ? (
          <>
            <button onClick={onSave} className="text-green-600">
              Save
            </button>
            <button onClick={onCancel} className="text-gray-600">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={onEdit} className="text-indigo-600">
            Edit
          </button>
        )}

        <button onClick={onDelete} className="text-red-600">
          Delete
        </button>
      </div>
    </li>
  );
}
