import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://sqxfbfrxsixnvmmpbohr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxeGZiZnJ4c2l4bnZtbXBib2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDE5NTEsImV4cCI6MjA1NTUxNzk1MX0.igZnt33TD9GtTr9wO1stXzItKkzLCaU7N7roCqkINCU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
