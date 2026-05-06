
type VoteCardProps = {
  title: string;
  votes: number;
  onVote: () => void;
};

export default function VoteCard({
  title,
  votes,
  onVote,
}: VoteCardProps) {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow">
      {/* Voting item title */}
      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      {/* Display total votes */}
      <p className="mb-3">
        Votes: {votes}
      </p>

      {/* Vote button*/}
      <button
      onClick={onVote}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Vote
      </button>
    </div>
  );
}
