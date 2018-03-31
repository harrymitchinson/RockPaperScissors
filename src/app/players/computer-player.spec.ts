import { ComputerPlayer } from ".";
import { Choice } from "../enums";

describe("ComputerPlayer", () => {
  it("should initialize choice", () => {
    // Arrange => Act
    const player = new ComputerPlayer({ id: 1 });
    // Assert
    expect(player.choice).toBeDefined();
  });
  it("should generate new choice", () => {
    // Arrange
    const player = new ComputerPlayer({ id: 1 });
    const spy = spyOnProperty(player, "choice", "set");

    // Act
    player.setNextChoice();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
