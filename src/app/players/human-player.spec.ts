import { HumanPlayer } from ".";
import { Choice } from "../enums";

describe("TacticalComputerPlayer", () => {
  it("should set new choice", () => {
    // Arrange
    const player = new HumanPlayer({ id: 1 });

    // Act
    player.setNextChoice(Choice.Paper);

    // Assert
    expect(player.choice).toBe(Choice.Paper);
  });
});
