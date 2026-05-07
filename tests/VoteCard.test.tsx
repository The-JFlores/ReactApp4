
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import VoteCard from "@/components/VoteCard";

// Test rendering of component title
test("renders vote card title", () => {
  render(
    <VoteCard
      title="React"
      votes={5}
      onVote={() => {}}
    />
  );

  expect(
    screen.getByText("React")
  ).toBeInTheDocument();
});

// Test vote button click
test("calls onVote when button is clicked", async () => {
  const mockVote = jest.fn();

  render(
    <VoteCard
      title="Next.js"
      votes={3}
      onVote={mockVote}
    />
  );

  const button =
    screen.getByRole("button", {
      name: /vote/i,
    });

  await userEvent.click(button);

  expect(mockVote).toHaveBeenCalled();
});