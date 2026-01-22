"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import { useEffect } from "react";
export default function Home() {
    const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);
   return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Task Manager
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Organize, track, and complete your tasks effortlessly.
          Stay focused, productive, and in control of your work.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-indigo-600 px-6 py-3
            text-white font-medium hover:bg-indigo-700 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-gray-300 px-6 py-3
            text-gray-700 hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <Feature
            title="Simple Task Management"
            description="Create, edit, and organize your tasks with an intuitive interface."
          />
          <Feature
            title="Stay Focused"
            description="Track progress and complete tasks without distractions."
          />
          <Feature
            title="Fast & Secure"
            description="Built with modern technologies for speed and reliability."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Task Manager. Built for productivity.
      </footer>
    </main>
  );
}

/* Reusable Feature Card */
function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-gray-50 p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
