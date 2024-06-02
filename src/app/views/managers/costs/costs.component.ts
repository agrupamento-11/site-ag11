import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FilterService } from 'src/app/services/filter.service';
import { CostsService } from './costs.service';

@Component({
    selector: 'app-costs',
    templateUrl: './costs.component.html',
    styleUrls: ['./costs.component.scss']
})

export class CostsComponent implements OnInit {
    cost: any = {}
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
        public _costsService: CostsService,
        public translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.loading_data()
    }

    loading_data() {
        this._onTableDataChange( this._filter )
    }

    _onTableDataChange(filterEmit: any): void{ 
        this.loading = true
        this.get_costs()
    }

    _onTableDataChangePage( page: any ){        
        this._filter.page = page
        this._onTableDataChange( this._filter )
    }

    _search(){
        this.get_costs()
    }

    get_costs() {
        this.loading = true
        
        this._costsService
        .get_costs( this._filter )
        .subscribe(response => {
            this._costsService.costs = Object(response)
            this.loading =  false
        })
    }

    pachValue(item: any) {
        this.cost = item
    }

}
