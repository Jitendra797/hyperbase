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
import { useRouter } from "next/navigation";

export function LoginDialog() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/datastore/browse");
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
