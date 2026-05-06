
"use client";

import { createContext, useContext, useReducer,} from "react";
import { VoteItem } from "@/types/vote";

type VoteContextType = {
  votes: VoteItem[];
  dispatch: React.Dispatch<Action>;
};

type Action = {
  type: "VOTE";
  payload: number;
};

// Initial voting data
const initialState: VoteItem[] = [
  {
    id: 1,
    title: "React",
    votes: 0,
  },
  {
    id: 2,
    title: "Next.js",
    votes: 0,
  },
  {
    id: 3,
    title: "TypeScript",
    votes: 0,
  },
];

// Reducer function to manage voting actions
function voteReducer(
  state: VoteItem[],
  action: Action
): VoteItem[] {
  switch (action.type) {
    case "VOTE":
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              votes: item.votes + 1,
            }
          : item
      );

    default:
      return state;
  }
}

const VoteContext =
  createContext<VoteContextType | null>(
    null
  );

// Global provider component
export function VoteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [votes, dispatch] = useReducer(
    voteReducer,
    initialState
  );

  return (
    <VoteContext.Provider
      value={{ votes, dispatch }}
    >
      {children}
    </VoteContext.Provider>
  );
}

// Custom hook for accessing vote context
export function useVotes() {
  const context = useContext(VoteContext);

  if (!context) {
    throw new Error(
      "useVotes must be used inside VoteProvider"
    );
  }

  return context;
}