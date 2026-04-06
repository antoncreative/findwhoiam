"use client";

import { useState, useEffect, useCallback } from "react";
import type { Story } from "@/lib/supabase";

type Tab = "pending" | "approved" | "rejected";

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);
  const [tab, setTab] = useState<Tab>("pending");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState("");

  const fetchStories = useCallback(async (adminKey: string) => {
    setLoading(true);
    const res = await fetch("/api/admin", {
      headers: { "x-admin-key": adminKey },
    });
    if (res.ok) {
      const data = await res.json();
      setStories(data);
      setAuthed(true);
    } else {
      setError("Wrong password.");
      setAuthed(false);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_key");
    if (saved) {
      setKey(saved);
      fetchStories(saved);
    }
  }, [fetchStories]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("admin_key", key);
    fetchStories(key);
  };

  const handleAction = async (id: string, action: "approve" | "reject") => {
    setActionLoading(id + action);
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-key": key },
      body: JSON.stringify({ id, action }),
    });
    if (res.ok) {
      await fetchStories(key);
    }
    setActionLoading(null);
  };

  const filtered = stories.filter((s) => s.status === tab);
  const counts = {
    pending: stories.filter((s) => s.status === "pending").length,
    approved: stories.filter((s) => s.status === "approved").length,
    rejected: stories.filter((s) => s.status === "rejected").length,
  };

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#1C1C1A] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <p className="font-serif text-2xl text-[#FAFAF8] mb-8 text-center">
            Admin — FindWhoIAm
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-[#FAFAF8] placeholder-white/30 focus:outline-none focus:border-[#B8956A] transition-colors"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#B8956A] text-[#FAFAF8] rounded-xl font-medium hover:bg-[#A07850] transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-serif text-3xl text-[#1C1C1A]">Stories Admin</h1>
            <p className="text-[#6B6A66] text-sm mt-1">{stories.length} total submissions</p>
          </div>
          <button
            onClick={() => { sessionStorage.removeItem("admin_key"); setAuthed(false); }}
            className="text-sm text-[#6B6A66] hover:text-[#1C1C1A] transition-colors"
          >
            Sign out
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-[#F2EFE9] p-1 rounded-xl mb-8 w-fit">
          {(["pending", "approved", "rejected"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors capitalize flex items-center gap-2 ${
                tab === t ? "bg-[#FAFAF8] text-[#1C1C1A] shadow-sm" : "text-[#6B6A66] hover:text-[#1C1C1A]"
              }`}
            >
              {t}
              {counts[t] > 0 && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  t === "pending" ? "bg-[#B8956A] text-white" : "bg-[#E0DBD0] text-[#6B6A66]"
                }`}>
                  {counts[t]}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Stories */}
        {loading ? (
          <p className="text-[#6B6A66]">Loading…</p>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-[#6B6A66]">
            No {tab} stories.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((story) => (
              <div key={story.id} className="bg-white border border-[#E0DBD0] rounded-2xl p-7">
                {/* Meta */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-[#1C1C1A]">{story.name}</span>
                      {story.location && (
                        <span className="text-xs text-[#6B6A66]">· {story.location}</span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B6A66]">
                      Submitted {new Date(story.submitted_at).toLocaleDateString("en-US", {
                        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
                      })}
                    </p>
                  </div>
                  {tab === "pending" && (
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => handleAction(story.id, "approve")}
                        disabled={!!actionLoading}
                        className="px-4 py-2 bg-[#1C1C1A] text-[#FAFAF8] rounded-full text-sm font-medium hover:bg-[#B8956A] transition-colors disabled:opacity-50"
                      >
                        {actionLoading === story.id + "approve" ? "…" : "Approve"}
                      </button>
                      <button
                        onClick={() => handleAction(story.id, "reject")}
                        disabled={!!actionLoading}
                        className="px-4 py-2 border border-[#E0DBD0] text-[#6B6A66] rounded-full text-sm font-medium hover:border-red-200 hover:text-red-500 transition-colors disabled:opacity-50"
                      >
                        {actionLoading === story.id + "reject" ? "…" : "Reject"}
                      </button>
                    </div>
                  )}
                  {tab === "approved" && (
                    <span className="text-xs px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">Published</span>
                  )}
                  {tab === "rejected" && (
                    <span className="text-xs px-3 py-1 bg-red-50 text-red-500 rounded-full border border-red-100">Rejected</span>
                  )}
                </div>

                <h3 className="font-serif text-xl text-[#1C1C1A] mb-3">{story.title}</h3>
                <p className="text-[#6B6A66] text-sm leading-relaxed whitespace-pre-wrap">
                  {story.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
