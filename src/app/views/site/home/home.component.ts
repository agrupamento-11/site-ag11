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

    }

    ngOnInit(): void {
        
    }










}
