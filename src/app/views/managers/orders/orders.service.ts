import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal  from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})

export class OrdersService {

    orders: any = []
    
    constructor(
        private _http_client: HttpClient
    ) { }

    private token = sessionStorage.getItem('sessionToken')
    private companyToken = sessionStorage.getItem('CURRENT_COMPANY')

    public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `Bearer ${this.token}`)
    .set('header-company-uuid', `${this.companyToken}`)

    get_orders(filter: any) {        
        return this._http_client.get<any>(
            `${environment.fullBaseUrl}/orders/`, 
            {
                params: filter,
                headers: this.headers 
            }
        )
    }

    create(data: any) {
        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/orders`,
            data, {headers: this.headers}
        )
    }

    update(uuid: string, data: any) {
        return this._http_client.put<any>(
            `${environment.fullBaseUrl}/orders/${uuid}`,
            data,
            { headers: this.headers }
        )
    }

    confirm_order(uuid: string){          
        return this._http_client.patch<any>(
            `${environment.fullBaseUrl}/orders/confirm-order/${uuid}`,
            {},
            { headers: this.headers }
        )
    }

    finalise(data: string){          
        return this._http_client.patch<any>(
            `${environment.fullBaseUrl}/orders/finish-order`,
            data,
            { headers: this.headers }
        )
    }

    schedule(data: any) {
        return this._http_client.patch<any>(
            `${environment.fullBaseUrl}/orders/set-expected-delivery-date`,
            data,
            { headers: this.headers }
        )
    }
    

}
