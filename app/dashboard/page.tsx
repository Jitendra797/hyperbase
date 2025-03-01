import { ThemeToggle } from "@/components/theme-toggle";

export default function Dashboard() {
  return (
    <main>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>
    </main>
  );
}
