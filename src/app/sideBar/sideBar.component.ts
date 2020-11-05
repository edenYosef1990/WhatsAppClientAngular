import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css']
})



export class SideBarComponent {

  showMenu: boolean = true;

  @Output() ToggleMenuStateChanged = new EventEmitter();

  toggleMenuBotton(): void {
    this.showMenu = !this.showMenu;
    this.ToggleMenuStateChanged.emit(this.showMenu);
  }
}
