"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createClient } from "@/utils/supabase/client";

export function LoginDialog() {
  const supabase = createClient();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error("Error signing in:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Get started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center">Login Page</DialogTitle>
          <DialogDescription className="text-center">
            Click on the button below to login to your account.
          </DialogDescription>
          <Button onClick={handleLogin}>SignIn with Google</Button>
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
