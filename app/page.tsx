import { ThemeToggle } from "@/components/theme-toggle";
import { LoginDialog } from "./login/login-dialogue";

export default function Home() {
  return (
    <main>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <LoginDialog />
      </div>
    </main>
  );
}
