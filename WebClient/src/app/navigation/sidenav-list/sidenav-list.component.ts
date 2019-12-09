import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public onSidenavCloseLogin = () => {
    this.router.navigate(['/login']);
    this.sidenavClose.emit();
  }

  public openA = () => {
    this.router.navigate(['/a']);
    this.sidenavClose.emit();
  }

  public openB = () => {
    this.router.navigate(['/b']);
    this.sidenavClose.emit();
  }
  public openC = () => {
    this.router.navigate(['/c']);
    this.sidenavClose.emit();
  }

  public isAuthorized = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return true;
    }
    return false;
  }
}
