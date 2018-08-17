import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapsed: boolean = false;
  public isSideBarCollapsed: boolean = false;
  public isUserDropDownCollapsed: boolean = false;
  public isSideMenuCollapsed: boolean = false;
}
