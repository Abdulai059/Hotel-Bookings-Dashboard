import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yyxwnolpwimgchfqagjg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5eHdub2xwd2ltZ2NoZnFhZ2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjY3NTksImV4cCI6MjA3NDUwMjc1OX0.WhdRu6X177mCR1aXnUAfyssmIr7VSH34SaogprhDoP8";

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
