import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/auth/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {

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
