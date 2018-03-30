import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameService } from '../services';
import { Router } from '@angular/router';
import { NoRoundsGuard } from './no-rounds.guard';

describe('NoRoundsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [NoRoundsGuard, GameService]
    });
  });

  it(
    'should create',
    inject([NoRoundsGuard], (service: NoRoundsGuard) =>
      expect(service).toBeTruthy()
    )
  );

  describe('when no rounds', () => {
    let router: Router;
    let result: boolean;
    beforeEach(
      inject(
        [NoRoundsGuard, GameService],
        (service: NoRoundsGuard, gameService: GameService) => {
          // Arrange
          spyOn(gameService, 'getTotalRounds').and.returnValue(0);
          router = TestBed.get(Router);
          spyOn(router, 'navigate');

          // Act
          result = service.canActivate();
        }
      )
    );
    it('should return false', () => expect(result).toBe(false));
    it('should route to rounds', () =>
      expect(router.navigate).toHaveBeenCalledWith(['rounds']));
  });

  describe('when rounds', () => {
    it(
      'should return true',
      inject(
        [NoRoundsGuard, GameService],
        (service: NoRoundsGuard, gameService: GameService) => {
          // Arrange
          spyOn(gameService, 'getTotalRounds').and.returnValue([3]);

          // Act
          const result = service.canActivate();

          // Assert
          expect(result).toBe(true);
        }
      )
    );
  });
});
