import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { ChangePasswordComponent } from './change-password/change-password.component'
import { RegisterComponent } from './register/register.component'
import { ValidationOtpComponent } from './validation-otp/validation-otp.component'


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: RegisterComponent
    },
    {
        path: 'validation-cell-phone',
        component: ValidationOtpComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    }
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }