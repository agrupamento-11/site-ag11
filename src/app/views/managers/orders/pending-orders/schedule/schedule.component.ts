import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService } from 'src/app/api/application.service';
import { OrdersService } from '../../orders.service';
import { FilterService } from 'src/app/services/filter.service';


@Component({
    selector: 'ScheduleModal',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    @Input() modal: any = "ScheduleModal"
    @Input() title: string = "Agendar Entrega"
    @Input() order: any
    @Input() orderForm: FormGroup

    submitted = false

    constructor(
        public _filterService: FilterService,
        public _ordersService: OrdersService,
        private _applicationService: ApplicationService,
        private _formBuild: FormBuilder

    ) {
        this.orderForm = this._formBuild.group({
            order_uuid: [{ value: null, disabled: true }],
            expected_delivery_date: [null, Validators.required],
        })
    }

    ngOnInit(): void {
    }


    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        this.title = "Agendar entrega";
        this.orderForm.patchValue(this.order)
    }

    get f() {
        return this.orderForm.controls;
    }

    onReset() {
        this.submitted = false;
        this.orderForm.reset();
    }

    onSubmit() {
        this.submitted = true
        if (this.orderForm.invalid) {
            return;
        }

        this.orderForm
        .controls['order_uuid'].setValue({
            order_uuid: this.order.uuid
        })

        this._update(this.orderForm.value)
    }

    _update(form: any) {
        form['order_uuid'] = this.order.uuid

        this._ordersService.schedule(form)
        .subscribe(response => {
            
            this._applicationService.CloseModal('ScheduleModal')
            this.submitted = false;
            this.get_orders()
            this._applicationService.SwalSuccess("Encomenda agendada com sucesso!");
            this.onReset()
        })
    }

    get_orders() {
        let _filter = {
            page: 1,
            limit: 10,
            order_by: '-created_at',
            filter_column: 'status',
            filter_value: 'Pendente',
            start_date: this._filterService.getFirstDateOfLastMonth(),
            end_date: this._filterService.getCurrentMonth()
        }

        this._ordersService
        .get_orders( _filter )
        .subscribe(response => {
            this._ordersService.orders = Object(response)
        })
    }



}
