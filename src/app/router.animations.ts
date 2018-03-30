import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';

const first = query(
  ':enter, :leave',
  style({ position: 'fixed', width: '100%' }),
  { optional: true }
);

const second = group([
  query(
    ':enter',
    [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ],
    { optional: true }
  ),
  query(
    ':leave',
    [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ],
    { optional: true }
  )
]);

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [first, second])
]);
