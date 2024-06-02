import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { OrdersService } from '../orders.service';
import { ApplicationService } from 'src/app/api/application.service';

@Component({
    selector: 'app-pending-orders',
    templateUrl: './pending-orders.component.html',
    styleUrls: ['./pending-orders.component.scss']
})

export class PendingOrdersComponent implements OnInit {

    loading: boolean = false
    order: any = {}

    _filter: any = {
        page: 1,
        limit: 10,
        order_by: '-created_at',
        filter_column: 'status',
        filter_value: 'Pendente',
        start_date: this._filterService.getFirstDateOfLastMonth(),
        end_date: this._filterService.getCurrentMonth()
    }

    constructor(
        public _filterService: FilterService,
        public _appService: ApplicationService,
        public _ordersService: OrdersService,
    ) { }

    ngOnInit(): void {
        this.loading_data()
    }

    confirm(order: any){

        this._appService
        .SwalConfirmation(
            "Tens certeza?",
            "Pretende Confirmar a encomenda"
        ).then((result) => {            
            if (result.isConfirmed) {
                this._ordersService
                .confirm_order(order.uuid)
                .subscribe( response => {
                    
                    console.log( response );
                })
            }
        })
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

    pachValue(item: any) {
        this.order = item
    }

}
