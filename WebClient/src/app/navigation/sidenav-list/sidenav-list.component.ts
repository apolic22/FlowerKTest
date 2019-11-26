import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public onSidenavCloseLogin = () => {
    this.router.navigate(['/login']);
    this.sidenavClose.emit();
  }

  public isAuthorized = () => {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return true;
    }
    return false;
  }

}
