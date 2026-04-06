"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubmitStoryPage() {
  const [form, setForm] = useState({ name: "", location: "", title: "", content: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      const data = await res.json();
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-[#F2EFE9] flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 14l6 6L22 8" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="font-serif text-3xl text-[#1C1C1A] mb-4">Thank you.</h1>
          <p className="text-[#6B6A66] leading-relaxed mb-8">
            Your story has been received. We will review it and publish it soon.
            Thank you for sharing your path — it will mean something to others.
          </p>
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1C1C1A] text-[#FAFAF8] rounded-full text-sm font-medium hover:bg-[#B8956A] transition-colors duration-300"
          >
            Read other stories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#1C1C1A] pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-[#FAFAF8]/40 hover:text-[#B8956A] text-sm mb-10 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to stories
          </Link>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-[#B8956A]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#B8956A]">
              Share Your Path
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#FAFAF8] leading-[1.1] mb-4">
            Write your story
          </h1>
          <p className="text-[#FAFAF8]/50 text-base leading-relaxed">
            Your story will be reviewed before publishing. Write honestly — in
            your own words, at your own pace.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
                Your name <span className="text-[#B8956A]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Anton"
                className="w-full px-4 py-3.5 bg-[#F2EFE9] border border-[#E0DBD0] rounded-xl text-[#1C1C1A] placeholder-[#6B6A66]/50 focus:outline-none focus:border-[#B8956A] transition-colors text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
                Where are you from?
                <span className="text-[#6B6A66] font-normal ml-1">(optional)</span>
              </label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="Kyiv, Ukraine"
                className="w-full px-4 py-3.5 bg-[#F2EFE9] border border-[#E0DBD0] rounded-xl text-[#1C1C1A] placeholder-[#6B6A66]/50 focus:outline-none focus:border-[#B8956A] transition-colors text-base"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
              Story title <span className="text-[#B8956A]">*</span>
            </label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="How I stopped being an engineer and started living"
              className="w-full px-4 py-3.5 bg-[#F2EFE9] border border-[#E0DBD0] rounded-xl text-[#1C1C1A] placeholder-[#6B6A66]/50 focus:outline-none focus:border-[#B8956A] transition-colors text-base"
            />
          </div>

          {/* Story */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1A] mb-2">
              Your story <span className="text-[#B8956A]">*</span>
            </label>
            <p className="text-xs text-[#6B6A66] mb-3">
              Write as much or as little as you want. Be honest. This is your voice.
            </p>
            <textarea
              required
              rows={12}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="I spent 8 years working as a software engineer. I made good money. On paper, everything was fine. But every Sunday evening I felt a quiet dread..."
              className="w-full px-4 py-4 bg-[#F2EFE9] border border-[#E0DBD0] rounded-xl text-[#1C1C1A] placeholder-[#6B6A66]/50 focus:outline-none focus:border-[#B8956A] transition-colors text-base leading-relaxed resize-y"
            />
            <p className="text-xs text-[#6B6A66] mt-2">
              {form.content.length} characters
              {form.content.length < 100 && form.content.length > 0 && (
                <span className="text-[#B8956A] ml-2">(minimum 100)</span>
              )}
            </p>
          </div>

          {/* Error */}
          {status === "error" && (
            <div className="px-4 py-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
              {errorMsg}
            </div>
          )}

          {/* Submit */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-[#6B6A66] max-w-xs leading-relaxed">
              Your story will be reviewed before publishing. We may lightly edit
              for clarity with your permission.
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1C1C1A] text-[#FAFAF8] rounded-full text-base font-medium hover:bg-[#B8956A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 ml-6"
            >
              {status === "loading" ? "Sending…" : "Submit Story"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
