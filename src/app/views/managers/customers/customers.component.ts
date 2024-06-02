import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
    loading: boolean = false

    _filter: any = {
        page: 1,
        limit: 10,
        order_by: '-created_at',
        filter_column: null,
        filter_value: null,
        start_date: this._filterService.getFirstDateOfLastMonth(),
        end_date: this._filterService.getCurrentMonth()
    }

    constructor(
        public _filterService: FilterService,
        public _customersService: CustomersService
    ) { }

    ngOnInit(): void {
        this.loading_data()
    }

    loading_data() {
        this._onTableDataChange( this._filter )
    }

    _onTableDataChange(filterEmit: any): void{ 
        this.loading = true
        this.get_customers()
    }

    _onTableDataChangePage( page: any ){        
        this._filter.page = page
        this._onTableDataChange( this._filter )
    }

    _search(){
        this.get_customers()
    }

    get_customers() {
        this.loading = true
        
        this._customersService
        .get_customers( this._filter )
        .subscribe(response => {
            this._customersService.customers = Object(response)
            this.loading =  false
        })
    }



}
