import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FilterService {

    pagination: any = {
        page: 1,
        limit: 10,
        order_by: '-created_at',
        filter_column: null,
        filter_value: null,
        start_date: this.getFirstDateOfLastMonth(),
        end_date: this.getCurrentMonth()
    }

    constructor() {
        
    }

    reset(){
        this.pagination = {
            page: 1,
            limit: 10,
            order_by: '-created_at',
            filter_column: null,
            filter_value: null,
            start_date: this.getFirstDateOfLastMonth(),
            end_date: this.getCurrentMonth()
        }
    }

    getFirstDateOfLastMonth() {
        let today = new Date();
        let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        let year: any = lastMonth.getFullYear();
        let month: any = lastMonth.getMonth() + 1;
        let day: any = lastMonth.getDate();
      
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
      
        return year + '-' + month + '-' + day;
    }

    getCurrentMonth() {
        let today = new Date();
        let year = today.getFullYear();
        let month: any = today.getMonth() + 1;
        let day: any = today.getDate();
      
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
      
        return year + '-' + month + '-' + day;
    }


}
