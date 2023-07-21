import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent {
    constructor(
        private router: Router
    ){

    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        })
    }
}
