import { NoOpponentGuard } from './no-opponent.guard';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameService } from '../services';
import { ROUTES } from '../app.module';
import { Router } from '@angular/router';

describe('NoOpponentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [NoOpponentGuard, GameService]
    });
  });

  it(
    'should create',
    inject([NoOpponentGuard], (service: NoOpponentGuard) =>
      expect(service).toBeTruthy()
    )
  );

  describe('when no players', () => {
    let router: Router;
    let result: boolean;
    beforeEach(
      inject(
        [NoOpponentGuard, GameService],
        (service: NoOpponentGuard, gameService: GameService) => {
          // Arrange
          spyOn(gameService, 'getPlayers').and.returnValue([]);
          router = TestBed.get(Router);
          spyOn(router, 'navigate');

          // Act
          result = service.canActivate();
        }
      )
    );
    it('should return false', () => expect(result).toBe(false));
    it('should route to opponents', () =>
      expect(router.navigate).toHaveBeenCalledWith(['opponent']));
  });

  describe('when players', () => {
    it(
      'should return true',
      inject(
        [NoOpponentGuard, GameService],
        (service: NoOpponentGuard, gameService: GameService) => {
          // Arrange
          spyOn(gameService, 'getPlayers').and.returnValue([{}, {}]);

          // Act
          const result = service.canActivate();

          // Assert
          expect(result).toBe(true);
        }
      )
    );
  });
});
