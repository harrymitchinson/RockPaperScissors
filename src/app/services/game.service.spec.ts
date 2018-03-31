import { async, inject } from "@angular/core/testing";
import { GameService } from "./";
import { Choice, Outcome } from "../enums";
import { toPromise } from "rxjs/operator/toPromise";
import {
  HumanPlayer,
  TacticalComputerPlayer,
  ComputerPlayer,
} from "../players";

describe("GameService", () => {
  let service: GameService;
  beforeEach(() => {
    service = new GameService();
  });

  describe("getResults", () => {
    it("should return results", () => {
      // Arrange
      service.setPlayers(
        new ComputerPlayer({ id: 1 }),
        new ComputerPlayer({ id: 2 })
      );
      service.setRounds(1);
      service.playRound(1);

      // Act
      const results = service.getResults();

      // Assert
      expect(results.length).toBe(1);
    });
  });

  describe("getTotalRounds", () => {
    it("should return total rounds number", () => {
      // Arrange
      service.setPlayers(
        new ComputerPlayer({ id: 1 }),
        new ComputerPlayer({ id: 2 })
      );
      service.setRounds(1);
      service.playRound(1);

      // Act
      const rounds = service.getTotalRounds();

      // Assert
      expect(rounds).toBe(1);
    });
  });

  describe("getPlayers", () => {
    it("should return players", () => {
      // Arrange
      service.setPlayers(
        new ComputerPlayer({ id: 1 }),
        new ComputerPlayer({ id: 2 })
      );

      // Act
      const players = service.getPlayers();

      // Assert
      expect(players.length).toBe(2);
    });
  });

  describe("playRound", () => {
    const testOutcome = (
      choice1: Choice,
      choice2: Choice,
      winner: 0 | 1 | 2
    ) => {
      // Arrange
      const player1 = new HumanPlayer({ id: 1 });
      const player2 = new HumanPlayer({ id: 2 });
      service.setPlayers(player1, player2);
      const round = 1;
      service.setRounds(1);
      service.setChoice(round, player1.id, choice1);
      service.setChoice(round, player2.id, choice2);

      // Act
      service.playRound(round);

      // Assert
      expect(service.getResults()[0].winner).toBe(winner);
    };

    describe("rock", () => {
      it("should beat scissors", () =>
        testOutcome(Choice.Rock, Choice.Scissors, 1));
      it("should lose to paper", () =>
        testOutcome(Choice.Rock, Choice.Paper, 2));
    });

    describe("paper", () => {
      it("should beat rock", () => testOutcome(Choice.Paper, Choice.Rock, 1));

      it("should lose to scissors", () =>
        testOutcome(Choice.Paper, Choice.Scissors, 2));
    });

    describe("scissors", () => {
      it("should beat paper", () =>
        testOutcome(Choice.Scissors, Choice.Paper, 1));

      it("should lose to rock", () =>
        testOutcome(Choice.Scissors, Choice.Rock, 2));
    });

    describe("draw", () => {
      it("should return draw", () =>
        testOutcome(Choice.Scissors, Choice.Scissors, 0));
    });

    describe("computer player", () => {
      it("should set next choice", () => {
        // Arrange
        const player1 = new HumanPlayer({ id: 1, choice: Choice.Paper });
        const player2 = new ComputerPlayer({ id: 2 });
        spyOn(player2, "setNextChoice");
        service.setPlayers(player1, player2);
        const round = 1;
        service.setRounds(1);

        // Act
        service.playRound(round);

        // Assert
        expect(player2.setNextChoice).toHaveBeenCalled();
      });
    });

    describe("tactical computer player", () => {
      it("should set previous winning choice as next choice", () => {
        // Arrange
        const player1 = new HumanPlayer({ id: 1 });
        player1.setNextChoice(Choice.Paper);
        const player2 = new TacticalComputerPlayer({ id: 2 });
        player2.setNextChoice(Choice.Rock);
        service.setPlayers(player1, player2);
        const round = 1;
        service.setRounds(1);

        // Act
        service.playRound(round);

        // Assert
        expect(player2.choice).toBe(Choice.Paper);
      });
    });
  });
});
