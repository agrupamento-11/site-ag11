import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
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
        public _ordersService: OrdersService,
    ) { }

    ngOnInit(): void {
        this.loading_data()
    }

    loading_data() {
        this._onTableDataChange( this._filter )
    }

    _onTableDataChange(filterEmit: any): void{ 
        this.loading = true
        this.get_orders()
    }

    _onTableDataChangePage( page: any ){        
        this._filter.page = page
        this._onTableDataChange( this._filter )
    }

    _search(){
        this.get_orders()
    }

    get_orders() {
        this.loading = true

        this._ordersService
        .get_orders( this._filter )
        .subscribe(response => {
            this._ordersService.orders = Object(response)
            this.loading =  false
        })
    }


}
