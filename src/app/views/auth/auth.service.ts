import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    showLayoutEmitter = new EventEmitter<boolean>()
    userLogged = false


    private token = sessionStorage.getItem('sessionToken')

    public headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', `Bearer ${this.token}`)

    constructor(
        private router: Router,
        private _http_client: HttpClient
    ) { }

    signIn(user: any) {
        var formData = new FormData()

        formData.append("username", user.username)
        formData.append("password", user.password)

        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/users/login`,
            formData
        )
    }

    _validate_otp(code: string){
        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/users/verify-phone-number`,
            {code: code}, { headers: this.headers }
        )
    }

    _resend_otp(){
        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/users/validate-phone-number`,
            {}, { headers: this.headers }
        )
    }


    _createUser(user: any){
        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/users/`,
            user
        )
    }
    
    changePassword(user:any) {

        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/users/change-password`,
            user, { headers: this.headers }
        )
    }

    current_user(): any {
        let data: any = sessionStorage.getItem('currentUser')
        let response = JSON.parse(data)
        return response
    }

    _updateCurrentUser(user: any){
        let data: any = JSON.stringify( user )
        sessionStorage.setItem('currentUser', data)
    }

    removeTokenOfUser() {
        sessionStorage.removeItem('currentUser')
        sessionStorage.removeItem('sessionToken')

        this.userLogged = false
        this.showLayoutEmitter.emit(false)
        this.router.navigateByUrl('/login')
    }

    get_roles(){
        let url = `${environment.fullBaseUrl}/users/current_user`
        return this._http_client.get(url, { headers: this.headers })
    }

    getCompanyByUuid(company_uuid:any){
        let url = `${environment.fullBaseUrl}/companies/${company_uuid}`
        return this._http_client.get(url, { headers: this.headers })
    }

    _send_opt_token(cell_phone: string){
        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/users/validate-phone-number`,
            cell_phone
        )
    }

}