import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AuthService } from './auth.service'
import { AuthRoutingModule } from './auth.routing.module'
import { LoginComponent } from './login/login.component'

import {TranslateModule} from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module'
import { FooterComponent } from '../layout/footer/footer.component'
import { ChangePasswordComponent } from './change-password/change-password.component'
import { RegisterComponent } from './register/register.component'
import { ValidationOtpComponent } from './validation-otp/validation-otp.component'

import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({

    declarations: [
        LoginComponent,
        ChangePasswordComponent,
        ValidationOtpComponent,
        RegisterComponent,
        FooterComponent
    ],
    exports: [
        
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        TranslateModule,
        NgOtpInputModule,
        SharedModule
    ],
    providers: [AuthService]
})
export class AuthModule {}