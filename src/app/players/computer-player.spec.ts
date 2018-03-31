import { ComputerPlayer } from ".";
import { Choice } from "../enums";

describe("ComputerPlayer", () => {
  it("should initialize choice", () => {
    // Arrange => Act
    const player = new ComputerPlayer({ id: 1 });
    // Assert
    expect(player.choice).toBeDefined();
  });
});
