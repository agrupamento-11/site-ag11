import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { DashboardService } from '../../dashboard.service';

Chart.register(...registerables)


@Component({
    selector: 'bar-chart',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})

export class BarComponent implements OnInit {

    public chart: any;


    constructor(
        private _dashService: DashboardService
    ) {
        this.get_resume()
    }

    ngOnInit(): void {

    }

    get_resume(){
        this._dashService
        .get_summary_users()
        .subscribe(response => {
            let result = Object(response)
            this.render_barchart(result)
        },error => {
            console.log( error )
        })
    }

    render_barchart(response: any){
        let labels = response.map( (item: any) => item.month_name )
        let data = response.map( (item: any) => item.total )

        new Chart('barchart', {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'REGISTO DE CLIENTES / MÊS',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    borderColor: 'rgb(71 126 142)'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }



}
