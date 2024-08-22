import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://cpkibyqcwbytkhjcpowm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2lieXFjd2J5dGtoamNwb3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTg5NTcsImV4cCI6MjAzOTgzNDk1N30.4oxOYUovu-sUGHUcbv_yEJ8LNcvukj-8hGaqLMV2D74"
);
