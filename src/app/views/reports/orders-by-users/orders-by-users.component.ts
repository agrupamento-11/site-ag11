import { Chart, registerables } from 'chart.js/auto';

import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
Chart.register(...registerables)

@Component({
    selector: 'app-orders-by-users',
    templateUrl: './orders-by-users.component.html',
    styleUrls: ['./orders-by-users.component.scss']
})

export class OrdersByUsersComponent implements OnInit {

    constructor(
        private _reportsService: ReportsService
    ) {
        this.get_orders_by_users()
    }

    ngOnInit(): void {
    }

    get_orders_by_users(){
        this._reportsService
        .get_orders_by_users()
        .subscribe(response => {
            let result = Object(response)

            console.log(result);
            
            this.render_bar_chart_horizontal(result)
        },error => {
            console.log( error )
        })
    }

    render_bar_chart_horizontal(response: any){
        let labels = response.map( (item: any) => item.name )
        let data = response.map( (item: any) => item.total )

        new Chart('barChartHorizontal', {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Quant. Encomendas',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    borderColor: 'rgb(71 126 142)'
                }]
            },
            options: {
                indexAxis: 'y',
            }
        });
    }


}
