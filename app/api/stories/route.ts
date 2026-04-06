import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { name, location, title, content } = await req.json();

  if (!name || !title || !content) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (content.length < 100) {
    return NextResponse.json({ error: "Story is too short (minimum 100 characters)" }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("stories").insert({
    name: name.trim(),
    location: location?.trim() || null,
    title: title.trim(),
    content: content.trim(),
    status: "pending",
  });

  if (error) {
    return NextResponse.json({ error: "Failed to submit story" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
