
-- Table for storing Rust book sections as knowledge base for Vela AI
CREATE TABLE public.rust_book_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  page_number INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public read access (this is reference documentation)
ALTER TABLE public.rust_book_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read rust book sections"
  ON public.rust_book_sections
  FOR SELECT
  USING (true);

-- Table for storing chat conversations (no auth required for demo)
CREATE TABLE public.vela_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.vela_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read their session conversations"
  ON public.vela_conversations
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert conversations"
  ON public.vela_conversations
  FOR INSERT
  WITH CHECK (true);
