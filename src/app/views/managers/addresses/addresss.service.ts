import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationService } from 'src/app/api/application.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AddresssService {

    products: any = []
    
    constructor(
        private _applicationService: ApplicationService,
        private _http_client: HttpClient
    ) { }

    private token = sessionStorage.getItem('sessionToken')

    public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', `Bearer ${this.token}`)


    update(address: any) {

        (async() => {
            try {
                this.getCurrentLocation()
                .then( (position: any) => {
                    address.latitude = position.lat
                    address.longitude = position.lng
                    
                    this._http_client.put<any>(
                        `${environment.fullBaseUrl}/addresses/${ address.uuid }`,
                        address,
                        { headers: this.headers }
                    )
                })
            } catch (err) {
                console.log(err);
            }
        })()
    }

    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                (position) => {
                    if (position) {
                        let lat = position.coords.latitude;
                        let lng = position.coords.longitude;
            
                        const location = {
                            lat,
                            lng,
                        };
                        resolve(location);
                    }
                },
                (error) => console.log(error)
            );
            } else {
                reject('Geolocation is not supported by this browser.');
            }
        })
    }


}
