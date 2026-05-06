
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
    <main className="p-8">
      {/* Main application heading */}
      <h1 className="text-4xl font-bold mb-6">
        Tech Voting App
      </h1>

      {/* Render all vote cards */}
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