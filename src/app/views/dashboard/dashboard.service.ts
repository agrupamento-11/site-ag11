import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    products: any = []

    constructor(private _http_client: HttpClient) { }

    private token = sessionStorage.getItem('sessionToken')
    private companyToken = sessionStorage.getItem('CURRENT_COMPANY')



    public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `Bearer ${this.token}`)
    .set('header-company-uuid', `${this.companyToken}`)

    get_summary_users() {
        return this._http_client.get<any>(
            `${environment.fullBaseUrl}/users/summary-users-by-month/`, 
            { headers: this.headers }
        )
    }

    get_resume() {
        return this._http_client.get<any>(
            `${environment.fullBaseUrl}/orders/summary`, 
            { headers: this.headers }
        )
    }

    get_resume_orders_of_day(filter: any) {        
        return this._http_client.get<any>(
            `${environment.fullBaseUrl}/orders/`, 
            {
                params: filter,
                headers: this.headers 
            }
        )
    }



}
