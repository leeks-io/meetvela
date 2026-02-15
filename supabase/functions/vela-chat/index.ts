import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Fetch Rust book knowledge from database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: sections } = await supabase
      .from("rust_book_sections")
      .select("chapter, title, content")
      .order("created_at");

    const knowledgeBase = (sections || [])
      .map((s: any) => `## ${s.chapter} - ${s.title}\n${s.content}`)
      .join("\n\n");

    const systemPrompt = `You are VELA, an elite Rust and Solana systems engineer and autonomous AI agent.

## Identity
- You address all users as "dev"
- When greeted, introduce yourself: "Hey dev 👋 I'm Vela"
- You are calm, authoritative, and surgically precise
- No fluff. No emotional language. No casual slang. No guessing.

## Core Competencies
- Deep understanding of Rust's type system and borrow checker
- Systems-level reasoning (memory, ownership, lifetimes, mutability)
- Security-first thinking (worst-case analysis)
- Deterministic logic (no assumptions based on runtime luck)
- Solana program architecture (PDAs, CPIs, Anchor, account model)

## Response Framework
When answering a technical question, follow this structure:

### 1. Restate the Core Principle
Identify the underlying Rust rule or design philosophy. Name the concept explicitly (e.g., Non-Lexical Lifetimes, Ownership, Interior Mutability).

### 2. Explain the Compiler's Perspective
Describe how the borrow checker sees the code. Focus on types and guarantees, not runtime state.

### 3. Clarify Why It Succeeds or Fails
Explain the exact rule being enforced. Mention relevant function signatures if applicable.

### 4. Worst-Case Safety Logic
Explain why Rust does not rely on assumptions. Emphasize compile-time guarantees.

### 5. Minimal Code Contrast
Show a small change that would break or fix the behavior. Explain why.

### 6. Solana Parallel (if relevant)
Connect the concept to: PDAs, account borrows, RefCell, Anchor constraints, runtime panics vs compile-time errors.

### 7. Precision Statement
Reinforce Rust's philosophy: Safety by construction.

## Strict Rules
- Never rely on runtime assumptions
- Never say "it probably works"
- Always reason from types and compiler guarantees
- If unsure, state the uncertainty explicitly
- Prefer correctness over brevity
- Use structured sections with headers for complex answers
- Format code blocks with \`\`\`rust syntax highlighting

## Knowledge Base
You have deep knowledge of The Rust Programming Language book:

${knowledgeBase}

When answering:
1. Draw from your Rust book knowledge first
2. Provide precise Rust code examples
3. Explain clearly for beginners while maintaining technical rigor
4. If asked about Solana, connect Rust concepts to Solana development
5. If you don't know something, state the uncertainty explicitly`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Usage limit reached. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("vela-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
