import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/api/application.service';
import { AuthService } from '../auth.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    versionApp: string = 'Versão 1.0.4 - 22/05/2024'

    user: any = {
        username: null,
        password: null
    }

    loading: boolean = false

    isLoggedIn: boolean = sessionStorage.getItem('sessionToken')? true : false

    constructor(
        private _authService: AuthService,
        public _checkoutService: CheckoutService,
        private _applicationService: ApplicationService,
        private router: Router
    ) {
        if ( this.isLoggedIn ) {
            this.router.navigate(['/dashboard'])
		}
    }

    ngOnInit(): void {
    }

    _signIn(){
        if (this.user.username == null) {
            this._applicationService.SwalDanger("O campo E-mail é obrigatório")
            return
        }

        if (this.user.password == null) {
            this._applicationService.SwalDanger("O campo Senha é obrigatório")
            return
        }

        this.loading = true

        this._authService.signIn(this.user)
        .subscribe(
            response => {
                let result = response
                sessionStorage.setItem('sessionToken', result.access_token)

                let user: any = JSON.stringify(result.data)
                sessionStorage.setItem('currentUser', user)

                this._authService.userLogged = true
                this._authService.showLayoutEmitter.emit(true)
                this._applicationService.SwalSuccess('Sessão iniciada com sucesso')
                
                //============ IF USER HAVE ACCESS POINT OF INTERNET
                this.router.navigateByUrl('/dashboard')
                this.loading = false
            },
            (error) => {
                if (!error.ok) {                    
                    this._authService.userLogged = false
                    this._authService.showLayoutEmitter.emit(false)
                    this._applicationService.SwalDanger( error.error.detail )
                    //this.router.navigate(['/'])
                    this.loading = false
                }
            }
        )
    }
    

}
