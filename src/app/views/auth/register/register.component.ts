import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApplicationService } from 'src/app/api/application.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    submitted = false
    loading: boolean = false
    user: any = {}

    userForm: FormGroup;


    constructor(
        private router: Router,
        private _authService: AuthService,
        private _applicationService: ApplicationService,
        private _formBuild: FormBuilder
    ) {
        this.userForm = this._formBuild.group({
            uuid: [{ value: null, disabled: true }],
            name: [null, Validators.required],
            phone_number: [null, Validators.required],
            password: [null, Validators.required]
        })

        
    }

    ngOnInit(): void {

    }

    get f() {
        return this.userForm.controls;
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        if (this.user !== undefined) {
            this.userForm.patchValue(this.user);
        }
    }


    onReset() {
        this.submitted = false;
        this.userForm.reset();
    }

    onSubmit() {
        this.submitted = true
        if (this.userForm.invalid) {
            return;
        }
    
        this._create(this.userForm.value)
    }

    _create(form: FormGroup) {
        this.loading = true 

        this._authService._createUser(form)
        .subscribe(response => {    
            let result = response            
            sessionStorage.setItem('sessionToken', result.access_token)

            let user: any = JSON.stringify(result.data)
            sessionStorage.setItem('currentUser', user)

            this._authService.userLogged = true
            this._authService.showLayoutEmitter.emit(true)
            this._applicationService.SwalSuccess("Registo feito com sucesso!");
            
            this.loading = false            
            this.router.navigateByUrl('/validation-cell-phone')
        }, (error) => {
            this.loading = false
            this._applicationService.SwalDanger(error.error.detail)
        })
    }

}
