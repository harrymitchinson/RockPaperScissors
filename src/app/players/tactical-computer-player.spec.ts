import { TacticalComputerPlayer } from ".";
import { Choice } from "../enums";

describe("TacticalComputerPlayer", () => {
  it("should initialize choice", () => {
    // Arrange => Act
    const player = new TacticalComputerPlayer({ id: 1 });
    // Assert
    expect(player.choice).toBeDefined();
  });
  it("should set new choice", () => {
    // Arrange
    const player = new TacticalComputerPlayer({ id: 1 });

    // Act
    player.setNextChoice(Choice.Paper);

    // Assert
    expect(player.choice).toBe(Choice.Paper);
  });
});
