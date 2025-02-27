import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    
    resume: any

    reports: any = [
        {
            name: 'RELATÓRIO E CONTAS - 2024',
            img: './assets/img/reports/report-2024.png',
            link: 'https://res.cloudinary.com/dho7l0xan/image/upload/v1736232611/scouts/Relatorio_Financeiro_AG-11_2024.pdf'
        },
        {
            name: 'ORDEM DE SERVIÇO Nº015/AG-11/2024',
            img: './assets/img/reports/ordem.png',
            link: 'https://res.cloudinary.com/dho7l0xan/image/upload/v1740670518/scouts/ORDENS-2024/Ordem_de_Servic%CC%A7o_n%C2%BA_015.2024.pdf'
        },
        {
            name: 'ORDEM DE SERVIÇO Nº014/AG-11/2024',
            img: './assets/img/reports/ordem.png',
            link: 'https://res.cloudinary.com/dho7l0xan/image/upload/v1740670518/scouts/ORDENS-2024/Ordem_de_Servic%CC%A7o_n%C2%BA_014.2024.pdf'
        },
        {
            name: 'ORDEM DE SERVIÇO Nº013/AG-11/2024',
            img: './assets/img/reports/ordem.png',
            link: 'https://res.cloudinary.com/dho7l0xan/image/upload/v1740670516/scouts/ORDENS-2024/Ordem_de_Servic%CC%A7o_n%C2%BA_013.2024.pdf'
        }
    
    ]

    constructor(
        private _siteService: SiteService
    ) {
        this.get_resume()
    }

    ngOnInit(): void {
        
    }


    get_summary_socuts(){

    }

    get_resume(){
        this._siteService
        .get_summary_socuts()
        .subscribe(response => {   
            console.log( response );
                     
            this.resume = Object(response)            
        })
    }

}
