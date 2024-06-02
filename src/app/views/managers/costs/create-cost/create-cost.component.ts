import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../products/products.service';
import { ApplicationService } from 'src/app/api/application.service';
import { CostsService } from '../costs.service';

@Component({
    selector: 'CreateCostModal',
    templateUrl: './create-cost.component.html',
    styleUrls: ['./create-cost.component.scss']
})
export class CreateCostComponent implements OnInit {

    @Input() modal: any = "CreateCostModal"
    @Input() title: string = "Registar Despesa"
    @Input() cost: any
    @Input() costForm: FormGroup

    submitted = false
    products: any = []


    constructor(
        public _costsService: CostsService,
        public _productsService: ProductsService,
        private _applicationService: ApplicationService,
        private _formBuild: FormBuilder
    ) {
        this.costForm = this._formBuild.group({
            uuid: [{ value: null, disabled: true }],
            price: [0, Validators.required],
            product_uuid: [null, Validators.required],
            description: [null, Validators.required]
        })

        this.get_products()
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        if (this.cost !== undefined) {
            this.title = "Registar Despesa";
            this.costForm.patchValue(this.cost);
        }
    }

    get f() {
        return this.costForm.controls;
    }

    onReset() {
        this.submitted = false;
        this.costForm.reset();
    }

    onSubmit() {
        this.submitted = true
        if (this.costForm.invalid) {
            return;
        }

        this._create(this.costForm.value)
    }

    _create(form: FormGroup) {
        this._costsService.create(form)
        .subscribe(response => {
            this._applicationService.CloseModal('CreateCostModal')
            this.submitted = false;
            this.get_costs()
            this._applicationService.SwalSuccess("Registo feito com sucesso!");
            this.onReset()
        })
    }

    get_costs() {
        this._costsService
        .get_costs({})
        .subscribe(response => {
            this._costsService.costs = Object(response)
        })
    }

    get_products() {
        this._productsService
        .get_products()
        .subscribe(response => {
            this.products = Object(response).items
        })
    }

}
