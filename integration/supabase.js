// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jjudqnzkmkvrjfvetbtm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdWRxbnprbWt2cmpmdmV0YnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNTYwOTYsImV4cCI6MjA2MzkzMjA5Nn0.9LRC6HZldn8Z_HFgCImqsVQ3ZvoG7xEzMmKFmPC3wuc'; // from Supabase Project Settings > API

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
