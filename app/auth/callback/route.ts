// app/auth/callback/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClient();
    const {
      data: { session },
      error,
    } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Error exchanging code for session:", error);
      return NextResponse.redirect(`${requestUrl.origin}/error`);
    }

    if (session) {
      const user = session.user;

      // Check if 'onboarded' exists in user_metadata
      const onboarded = user.user_metadata?.onboarded;

      if (onboarded === true) {
        // User has completed onboarding
        return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
      } else {
        // User has NOT completed onboarding, or metadata is missing
        // Update user_metadata to set onboarded to false (for new users)
        const { error: updateError } = await supabase.auth.updateUser({
          data: { onboarded: false },
        });

        if (updateError) {
          console.error("Error updating user metadata:", updateError);
          // Handle error appropriately
          return NextResponse.redirect(`${requestUrl.origin}/error`);
        }

        return NextResponse.redirect(`${requestUrl.origin}/onboarding`);
      }
    }
  }
  return NextResponse.redirect(requestUrl.origin);
}
