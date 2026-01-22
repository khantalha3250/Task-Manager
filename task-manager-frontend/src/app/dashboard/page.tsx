"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import { isAuthenticated, clearTokens,logout  } from "@/lib/auth";
import { Task } from "@/src/types/task";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import TaskInput from "@/components/dashboard/TaskInput";
import TaskFilters from "@/components/dashboard/TaskFilters";
import TaskItem from "@/components/dashboard/TaskItem";
import Pagination from "@/components/dashboard/Pagination";
import toast from "react-hot-toast";

export default function DashboardPage() {

  const router = useRouter();
  type StatusFilter = "all" | "completed" | "pending";

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
const [newTask, setNewTask] = useState("");
const [adding, setAdding] = useState(false);
const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
const [editingTitle, setEditingTitle] = useState("");
const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
const [search, setSearch] = useState("");
const [page, setPage] = useState(1);
const [limit] = useState(5);
const [totalPages, setTotalPages] = useState(1);

useEffect(() => {
  if (!isAuthenticated()) {
    router.replace("/login");
  }
}, [router]);

useEffect(() => {
  fetchTasks();
}, [page, statusFilter, search]);



  const handleAddTask = async () => {
  if (!newTask.trim()) return;

  setAdding(true);
  try {
    const res = await apiFetch("/tasks", {
      method: "POST",
      body: JSON.stringify({ title: newTask }),
    });

    if (!res?.ok) {
      throw new Error("Failed to add task");
    }

    setNewTask("");
    fetchTasks(); 
    toast.success("Task added");
  } catch (error) {
    console.error(error);
    toast.error("Failed to add task");
  } finally {
    setAdding(false);
  }
};

const fetchTasks = async () => {
  try {
     setLoading(true);

    let query = `/tasks?page=${page}&limit=${limit}&`;

    if (statusFilter !== "all") {
      query += `status=${statusFilter}&`;
    }

    if (search.trim()) {
      query += `q=${encodeURIComponent(search)}&`;
    }

    const res = await apiFetch(query);

    if (!res?.ok) {
      throw new Error("Failed to fetch tasks");
    }

    const data = await res.json();
    setTasks(data.data);
    setTotalPages(data.meta.totalPages);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const handleToggleTask = async (taskId: string) => {
  try {
    const res = await apiFetch(`/tasks/${taskId}/toggle`, {
      method: "PATCH",
    });

    if (!res?.ok) {
      throw new Error("Failed to toggle task");
    }

    fetchTasks(); 
    toast.success("Task updated");
  } catch (error) {
    console.error(error);
    toast.error("Failed to update task");
  }
};
const handleDeleteTask = async (taskId: string) => {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) return;

  try {
    const res = await apiFetch(`/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!res?.ok) {
      throw new Error("Failed to delete task");
    }

    fetchTasks(); 
    toast.success("Task deleted");
  } catch (error) {
    toast.error("Failed to delete task");
    console.error(error);
  }
};
const startEdit = (task: Task) => {
  setEditingTaskId(task.id);
  setEditingTitle(task.title);
};

const saveEdit = async () => {
  if (!editingTaskId || !editingTitle.trim()) return;

  try {
    const res = await apiFetch(`/tasks/${editingTaskId}`, {
      method: "PATCH",
      body: JSON.stringify({ title: editingTitle }),
    });

    if (!res?.ok) {
      throw new Error("Failed to update task");
    }

    setEditingTaskId(null);
    setEditingTitle("");
    fetchTasks();
    toast.success("Task updated"); 
  } catch (error) {
    console.error(error);
    toast.error("Failed to update task");
  }
};

const cancelEdit = () => {
  setEditingTaskId(null);
  setEditingTitle("");
};

 return (
  <DashboardLayout>
    <DashboardHeader onLogout={logout} />

    {loading && <p>Loading tasks...</p>}
    {!loading && tasks.length === 0 && (
      <p className="text-black-500">No tasks yet</p>
    )}

    <TaskInput
      value={newTask}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setNewTask(e.target.value)
      }
      onAdd={handleAddTask}
      loading={adding}
    />

    <TaskFilters
      search={search}
      status={statusFilter}
      onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)
      }
      onStatusChange={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) =>
        setStatusFilter(
          e.target.value as "all" | "pending" | "completed"
        )
      }
    />

    <ul className="space-y-3">
      {tasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          editing={editingTaskId === task.id}
          editingTitle={editingTitle}
          onToggle={() => handleToggleTask(task.id)}
          onEdit={() => startEdit(task)}
          onSave={saveEdit}
          onCancel={cancelEdit}
          onDelete={() => handleDeleteTask(task.id)}
          onChangeTitle={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => setEditingTitle(e.target.value)}
        />
      ))}
    </ul>

    <Pagination
      page={page}
      totalPages={totalPages}
      onPrev={() => setPage((p) => Math.max(1, p - 1))}
      onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
    />
  </DashboardLayout>
);

}
    