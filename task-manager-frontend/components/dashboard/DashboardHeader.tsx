export default function DashboardHeader({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
        <p className="text-sm text-gray-500">
          Manage your work easily & efficiently
        </p>
      </div>

      <button
  onClick={onLogout}
  className="text-sm px-4 py-2 rounded-lg
  border border-gray-300
  text-gray-900
  hover:bg-red-600 transition"
>
  Logout
</button>
    </div>
  );
}
