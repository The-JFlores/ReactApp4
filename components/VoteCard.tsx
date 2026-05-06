
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
    <div
      className="
        bg-white
        rounded-xl
        shadow-md
        p-6
        mb-5
        transition
        hover:scale-105
        hover:shadow-xl
      "
    >
      {/* Voting item title */}
      <h2 className="text-2xl font-bold mb-3 text-gray-800">
        {title}
      </h2>

      {/* Display total votes */}
      <p className="text-lg mb-4 text-gray-600">
        Votes: {votes}
      </p>

      {/* Voting action button */}
      <button
        onClick={onVote}
        className="
          bg-blue-500
          hover:bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          transition
        "
      >
        Vote
      </button>
    </div>
  );
}