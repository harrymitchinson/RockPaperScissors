# RockPaperScissors

This was originally set as an assessment for a job I had applied for.

[Demo](https://hm-rock-paper-scissors.herokuapp.com)

## Features

* Pick the type of opponent player (Computer Player / Tactical Computer Player)
* Pick the number of rounds to play (3 / 5 / 7)

### Players

#### Computer Player

The random computer player should automatically select one of Rock, Paper or Scissors at random for each turn.

#### Tactical Computer Player

The tactical computer player should always select the choice which would have beaten it's previous choice (excluding the first round which is random).

### Extensibility

* New computer player types by extending the BaseComputerPlayer and implementing the Player interface.
* Game lengths by changing the values in the numberOfRounds property within the RoundsPickerComponent.
* New choices by adding to the Choices enum and adding values to the ChoicePickerComponent and handling to the getWinner method of the GameService.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
