import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { OrdersService } from '../orders.service';
import { ApplicationService } from 'src/app/api/application.service';
import { AddresssService } from '../../addresses/addresss.service';

@Component({
    selector: 'app-confirmed-orders',
    templateUrl: './confirmed-orders.component.html',
    styleUrls: ['./confirmed-orders.component.scss']
})

export class ConfirmedOrdersComponent implements OnInit {

    loading: boolean = false
    order: any = {}

    _filter: any = {
        page: 1,
        limit: 10,
        order_by: '-created_at',
        filter_column: 'status',
        filter_value: 'Confirmado',
        start_date: this._filterService.getFirstDateOfLastMonth(),
        end_date: this._filterService.getCurrentMonth()
    }

    constructor(
        private _applicationService: ApplicationService,
        private _addresssService: AddresssService,        
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

    _finish(order: any) {
        this._applicationService
        .SwalConfirmation(
            "Tens certeza?",
            "Pretende Finalizar encomenda"
        ).then((result) => {            
            if (result.isConfirmed) {
                let data: any = {
                    order_uuid: order.uuid
                }

                this._ordersService
                .finalise( data )
                .subscribe( response => {
                    this.get_orders()
                })
            }
        })
    }

    _confirm_location(order: any) {

        let address = order.address        

        this._applicationService
        .SwalConfirmation(
            "Tens certeza?",
            "Atualizar a geo-referenciação do Cliente"
        ).then((result) => {            
            if (result.isConfirmed) {
                this._addresssService
                .update( address )
            }
        })
    }



}
