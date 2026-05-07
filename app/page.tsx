
"use client";

import VoteCard from "@/components/VoteCard";

import {
  VoteProvider,
  useVotes,
} from "@/context/VoteContext";

// Component that displays all voting cards
function VotingContent() {
  const { votes, dispatch } = useVotes();

  // Sort items by highest votes
const sortedVotes = [...votes].sort(
  (a, b) => b.votes - a.votes
);

  // Calculate total votes
const totalVotes = votes.reduce(
  (total, item) => total + item.votes,
  0
);

  return (
    <main className="min-h-screen flex flex-col items-center p-8">
      {/* Main application heading */}
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        Tech Voting App
      </h1>

      {/* Display total vote count */}
<p className="text-xl text-gray-600 mb-8">
  Total Votes: {totalVotes}
</p>

      {/* Render all vote cards */}
      <div className="w-full max-w-md">
      {sortedVotes.map((item) => (
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