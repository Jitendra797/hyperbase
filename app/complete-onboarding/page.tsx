// app/complete-onboarding/page.tsx
"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CompleteOnboarding = () => {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const insertProfileData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Retrieve data from localStorage
        const displayName = localStorage.getItem("onboarding_displayName")!;
        const bio = localStorage.getItem("onboarding_bio")!;
        const language = localStorage.getItem("onboarding_language")!;
        const proficiencyLevel = localStorage.getItem(
          "onboarding_proficiencyLevel"
        )!;
        const referralSource = localStorage.getItem(
          "onboarding_referralSource"
        )!;

        const { error } = await supabase.from("profiles").insert([
          {
            id: user.id,
            display_name: displayName,
            bio, // No need to check for null, it's handled in onboarding
            language,
            proficiency_level: proficiencyLevel,
            referral_source: referralSource,
          },
        ]);

        if (error) {
          console.error("Error inserting profile data:", error);
          // Handle error (e.g., show error message)
          return;
        }

        // Update the user metadata
        const { error: updateError } = await supabase.auth.updateUser({
          data: { onboarded: true },
        });
        if (updateError) {
          console.log(updateError);
          return;
        }

        // Clean up local storage
        localStorage.removeItem("onboarding_displayName");
        localStorage.removeItem("onboarding_bio");
        localStorage.removeItem("onboarding_language");
        localStorage.removeItem("onboarding_proficiencyLevel");
        localStorage.removeItem("onboarding_referralSource");

        router.push("/dashboard");
        router.refresh();
      }
    };

    insertProfileData();
  }, [router, supabase]);

  return <></>;
};

export default CompleteOnboarding;
