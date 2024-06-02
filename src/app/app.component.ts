import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './views/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';




@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {
	isLoggedIn: boolean = sessionStorage.getItem('sessionToken')? true : false

    constructor(
        public translate: TranslateService,
        private authService: AuthService,
        private router: Router
    ){

        
        if ( !this.isLoggedIn ) {
            //this.router.navigateByUrl('/login')
        }
        
        
    }

    ngOnInit() {
        /*
        this.authService.showLayoutEmitter.subscribe(
            myShow => this.isLoggedIn = myShow
        )
        */
        
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        })
    }


}
