import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animations = {
  animeMainViewTrigger: trigger('animeMainViewTrigger', [
    state('showMenu', style({ width: "80%" })),
    state('notShowMenu', style({ width: "95%" })),
    transition('showMenu => notShowMenu', [animate('0.2s')]),
    transition('notShowMenu => showMenu', [animate('0.2s')])
  ]),
  animeSideBarTrigger: trigger('animeSideBarTrigger', [
    state('showMenu', style({ width: "20%" })),
    state('notShowMenu', style({ width: "5%" })),
    transition('showMenu => notShowMenu', [animate('0.2s')]),
    transition('notShowMenu => showMenu', [animate('0.2s')])
  ])
}

