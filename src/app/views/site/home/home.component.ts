import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    scouts: any = []
    url: string = '/assets/scouts.json';


    constructor(
        private http: HttpClient
    ) {
        this.loading_data()
    }

    ngOnInit(): void {
        
    }


    loading_data(){
        this.scouts = this.data_scouts()
    }


    data_scouts(){
        this.http.get(this.url)
        .subscribe((res) => {
            this.scouts = res;
        }) 
    } 









}
