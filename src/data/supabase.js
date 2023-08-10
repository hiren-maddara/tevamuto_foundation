import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fqlchsjtnuyloculwgdg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxbGNoc2p0bnV5bG9jdWx3Z2RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyODE4NTIsImV4cCI6MjAwNjg1Nzg1Mn0.21SL0WcXCY5w8wwKb039NR2aUScwDIvtx9Ph_cpJzQg";

export default createClient(supabaseUrl, supabaseKey);
