import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRoute: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      (url: any) => {
        this.userRoute = url.url;
        this.showLandingBackGround();
      });
  }

  showLandingBackGround() {
    if (this.userRoute === '/home/landing') {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, window.innerHeight);
    }
  }

}
