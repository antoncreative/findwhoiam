import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-key";

// Public client — for reading approved stories
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client — for submitting and approving (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export type Story = {
  id: string;
  name: string;
  location: string | null;
  title: string;
  content: string;
  status: "pending" | "approved" | "rejected";
  slug: string | null;
  submitted_at: string;
  published_at: string | null;
};
