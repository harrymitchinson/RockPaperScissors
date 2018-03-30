import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameService } from '../services';
import { Router } from '@angular/router';
import { NoResultsGuard } from './no-results.guard';

describe('NoResultsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [NoResultsGuard, GameService]
    });
  });

  it(
    'should create',
    inject([NoResultsGuard], (service: NoResultsGuard) =>
      expect(service).toBeTruthy()
    )
  );

  describe('when no results', () => {
    let router: Router;
    let result: boolean;
    beforeEach(
      inject(
        [NoResultsGuard, GameService],
        (service: NoResultsGuard, gameService: GameService) => {
          // Arrange
          spyOn(gameService, 'getResults').and.returnValue([]);
          router = TestBed.get(Router);
          spyOn(router, 'navigate');

          // Act
          result = service.canActivate();
        }
      )
    );
    it('should return false', () => expect(result).toBe(false));
    it('should route to weapon/1', () =>
      expect(router.navigate).toHaveBeenCalledWith(['weapon', 1]));
  });

  describe('when results', () => {
    it(
      'should return true',
      inject(
        [NoResultsGuard, GameService],
        (service: NoResultsGuard, gameService: GameService) => {
          // Arrange
          spyOn(gameService, 'getResults').and.returnValue([{}]);

          // Act
          const result = service.canActivate();

          // Assert
          expect(result).toBe(true);
        }
      )
    );
  });
});
