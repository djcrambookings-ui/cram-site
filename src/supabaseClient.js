import { createClient } from "@supabase/supabase-js";

// These two values come from your Supabase project (Project Settings -> API).
// You paste them into Vercel as environment variables when you deploy:
//   VITE_SUPABASE_URL       = your Project URL
//   VITE_SUPABASE_ANON_KEY  = your anon public key
// The anon key is safe to use in the browser — your database security rules
// only let the public submit an enquiry, nothing else.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
