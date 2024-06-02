import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/api/application.service';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-validation-otp',
    templateUrl: './validation-otp.component.html',
    styleUrls: ['./validation-otp.component.scss']
})

export class ValidationOtpComponent implements OnInit {

    opt_number: any = []
    loading: boolean = false
    currentUser: any;

    constructor(
        private _authService: AuthService,
        private _applicationService: ApplicationService,
        private router: Router
    ) {
        this.currentUser = this._authService.current_user();
    }

    ngOnInit(): void {        
        if ( this.currentUser.is_valid_phone_number ) {
            this.router.navigate(['/managers/welcome'])
        }
    }

    onOtpChange(event: any){
        this.opt_number = event        
    }

    _resend_otp(){
        this.loading = true
        this.opt_number = []

        if ( this.currentUser.is_valid_phone_number ) {
            this._applicationService.SwalSuccess( 'Conta já válida' )
            this.router.navigate(['/managers/welcome'])
            this.loading = false
        } else {
            this._authService._resend_otp()
            .subscribe( response => {
                    this._applicationService.SwalSuccess( response )
                    this.loading = false
                },
                (error) => {
                    if (!error.ok) {                          
                        this._applicationService.SwalDanger( error.error.detail )
                        this.loading = false
                    }
                }
            ) 
        }
    }

    _validate_otp(){
        if ( this.opt_number.length != 5 ) {
            this._applicationService.SwalDanger('OTP inválido')
        } else {
            this._authService._validate_otp(this.opt_number)
            .subscribe( response => {
                    this._applicationService.SwalSuccess( response )
                    this.currentUser.is_valid_phone_number = true
                    this._authService._updateCurrentUser( this.currentUser )

                    this.router.navigate(['/managers/welcome'])
                    this.loading = false
                },
                (error) => {
                    if (!error.ok) {                          
                        this._applicationService.SwalDanger( error.error.detail )
                        this.loading = false
                    }
                }
            )
        }
    }



}
