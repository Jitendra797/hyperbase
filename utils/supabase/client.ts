// utils/supabase/client.ts
"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useState } from "react";

export const createClient = () => {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  );
  return supabase;
};
