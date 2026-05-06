
"use client";

import VoteCard from "@/components/VoteCard";

export default function Home() {
  return (
    <main className="p-8">
      {/* Main application heading */}
      <h1 className="text-4xl font-bold mb-6">
        Tech Voting App
      </h1>

      {/* Reusable voting cards */}
      <VoteCard
        title="React"
        votes={10}
        onVote={() => alert("Vote added")}
      />

      <VoteCard
        title="Next.js"
        votes={7}
        onVote={() => alert("Vote added")}
      />

      <VoteCard
        title="TypeScript"
        votes={5}
        onVote={() => alert("Vote added")}
      />
    </main>
  );
}