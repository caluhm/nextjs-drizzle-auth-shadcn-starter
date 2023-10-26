"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  return (
    <div className="absolute right-0 top-0 mr-4 mt-4">
      <Button variant="outline" onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  );
}
