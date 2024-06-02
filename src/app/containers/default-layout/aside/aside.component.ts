import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/auth/auth.service';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss'],
})

export class AsideComponent implements OnInit {

    loading: boolean = false

    constructor(
        private _authService: AuthService,
        public translate: TranslateService
    ) {

    }

    ngOnInit(): void {}

    logOut(){
        this.loading = true
        this._authService.removeTokenOfUser()
        this.loading = false
    }

}
