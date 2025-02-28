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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
            Enter your details below to login to your account.
          </DialogDescription>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Password</Label>
            <Input type="password" id="email" placeholder="Password" />
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
