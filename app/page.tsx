
"use client";

import VoteCard from "@/components/VoteCard";

import {
  VoteProvider,
  useVotes,
} from "@/context/VoteContext";

// Component that displays all voting cards
function VotingContent() {
  const { votes, dispatch } = useVotes();

  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      {/* Main application heading */}
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        Tech Voting App
      </h1>

      {/* Render all vote cards */}
      <div className="w-full max-w-md">
      {votes.map((item) => (
        <VoteCard
          key={item.id}
          title={item.title}
          votes={item.votes}
          onVote={() =>
            dispatch({
              type: "VOTE",
              payload: item.id,
            })
          }
        />
      ))}
      </div>
    </main>
  );
}

// Main application component
export default function Home() {
  return (
    <VoteProvider>
      <VotingContent />
    </VoteProvider>
  );
}