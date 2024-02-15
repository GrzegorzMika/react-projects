import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gcuhmnccmdmjxchjctoo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjdWhtbmNjbWRtanhjaGpjdG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NjA1NjUsImV4cCI6MjAyMzQzNjU2NX0.6XPW9QBDrx34japqRv7o9SMitKD_Y7p1Mj4uxmg4HCo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
