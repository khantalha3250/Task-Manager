export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      {children}
    </div>
  );
}
