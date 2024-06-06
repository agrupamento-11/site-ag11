import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
    products: any = []

    constructor(private _http_client: HttpClient) { }


    public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    get_summary_socuts() {
        return this._http_client.get<any>(
            `${environment.fullBaseUrl}/portal/`, 
            { headers: this.headers }
        )
    }



}
