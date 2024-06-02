import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CheckoutService {

    currentIP: any
    currentUser: any
    product: any = null

    checkout: any = {
        user: null,
    }

    constructor(
        private _http_client: HttpClient
    ) {
        this.getCurrentIP()
    }

    get_current_product(): any {
        let data: any = sessionStorage.getItem('currentProduct')
        let response = JSON.parse(data)
        return response
    }

    _setProduct(product: any){
        this.product = product
        sessionStorage.setItem('currentProduct', JSON.stringify(product))
    }

    _clean(){
        sessionStorage.removeItem('currentProduct')
        this.product = null
    }
    
    _checkPaymentWiza(reference_id: string) {
        return this._http_client.get<any>(
            `${environment.fullBaseUrl}/wiza/${reference_id}`
        )
    }

    getCurrentIP(){
        return this._http_client.get('https://jsonip.com')
        .subscribe((ipOfNetwork: any) =>  {
            this.currentIP = ipOfNetwork['ip']            
        })
    }

    _connectWiza(payload: any) {
        return this._http_client.post<any>(
            `${environment.fullBaseUrl}/wiza/`,
            payload
        )
    }

    _enableWifi(cell_phone: string){

        let payload = {
            cell_phone: cell_phone,
            ip_access: this.currentIP
        }

        console.log(payload);
        


    }


}
