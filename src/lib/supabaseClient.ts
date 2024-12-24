import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qunvo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTY1NzgsImV4cCI6MjAyMzQzMjU3OH0.Wd_jqxWVxZxGxE0Ht3Vp6Iy5dhzqHZN-nUqZNyTEWKE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)