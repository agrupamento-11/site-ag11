import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    
    resume: any

    constructor(
        private _siteService: SiteService
    ) {
        this.get_resume()
    }

    ngOnInit(): void {
        
    }


    get_summary_socuts(){

    }

    get_resume(){
        this._siteService
        .get_summary_socuts()
        .subscribe(response => {   
            console.log( response );
                     
            this.resume = Object(response)            
        })
    }

}
