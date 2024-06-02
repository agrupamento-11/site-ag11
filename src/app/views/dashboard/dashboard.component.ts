import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    isLoggedIn: boolean = sessionStorage.getItem('sessionToken')? true : false

    loading: boolean = false
    resume: any = []
    orders_of_day: any = []

    constructor(
        private router: Router,
        public _filterService: FilterService,
        private _dashService: DashboardService
    ){
        if ( !this.isLoggedIn ) {
            this.router.navigate(['/login'])
		}
    }
    
    ngOnInit(): void {
        this._loading_date()
    }

    _loading_date(){
        this.get_resume()
        this.get_resume_orders_of_day()
    }

    get_resume(){
        this._dashService
        .get_resume()
        .subscribe(response => {            
            this.resume = Object(response)
            this.loading = false
        })
    }

    get_resume_orders_of_day(){
        
        let _filter: any = {
            page: 1,
            order_by: '-created_at',
            filter_column: 'status',
            //filter_value: 'Pendente',
            start_date: this.getCurrentDay(),
            end_date: this.getCurrentDay()
        }

        this._dashService
        .get_resume_orders_of_day( _filter )
        .subscribe(response => {            
            this.orders_of_day = Object(response)
            this.loading = false
        })
    }

    getCurrentDay() {
        let today = new Date();
        let year = today.getFullYear();
        let month: any = today.getMonth() + 1;
        let day: any = today.getDate();
      
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
      
        return year + '-' + month + '-' + day;
    }


}
