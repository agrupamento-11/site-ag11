import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-organigram',
    templateUrl: './organigram.component.html',
    styleUrls: ['./organigram.component.scss']
})

export class OrganigramComponent implements OnInit {

    gestao: any = [
        {
            picture: '/assets/img/dirigentes/meidy.png',
            name: 'Meidy Ricardo',
            position: 'Chefe de Agrupamento'
        },
        {
            picture: '/assets/img/dirigentes/cabanga.png',
            name: 'João Cabanga',
            position: 'Chefe Adj. de Ag'
        },
        {
            picture: '/assets/img/dirigentes/anilde.png',
            name: 'Anilde Hossi',
            position: 'Tesoureira de Ag'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Elka Kay',
            position: 'Secretaria de Ag'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Pe. José Alves',
            position: 'Assistente do Ag'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Pe. Estevão Capewa ',
            position: 'Assistente do Ag'
        }
    ]

    chefes_unidades: any = [
        {
            picture: '/assets/img/dirigentes/paula.png',
            name: 'Paula José',
            position: 'Chefe 1ª Un. 1ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Fineza António',
            position: 'Chefe 2ª Un. 1ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/jay.png',
            name: 'Faustino Jai',
            position: 'Chefe 1ª Un.2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/estevao.png',
            name: 'Estevão Wilson',
            position: 'Chefe 2ª Un. 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/domingos.png',
            name: 'Domingos Neto',
            position: 'Chefe 1ª Un. 3ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Nelson Sami',
            position: 'Chefe 1ª Un. 3ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/sami.png',
            name: 'João Sami',
            position: 'Chefe 1ª Un. 4ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/gerson.png',
            name: 'Gerson Francisco',
            position: 'Chefe 2ª Un. 4ª Secção'
        }
    ]

    instrutores: any = [
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Jéssica Sendas',
            position: 'Instrutor(a) 1ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/raisa.png',
            name: 'Raisa Casimiro',
            position: 'Instrutor(a) 1ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Mariana Rafael',
            position: 'Instrutor(a) 1ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/bota.png',
            name: 'Nelson Cadete',
            position: 'Instrutor(a) 1ª Secção'
        },
        //=======================================================
        {
            picture: '/assets/img/dirigentes/alberto.png',
            name: 'Alberto Batista',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Alcidia Vanda',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'António Rosa',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/artur.png',
            name: 'Artur Marques',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/estevao.png',
            name: 'Estevão Wilson',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'José Angelino',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Madalena Dos Anjos ',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Maria Tati',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Adérito Chimalange',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Aluene Saldanha',
            position: 'Instrutor(a) 2ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Rosemeri Catendi',
            position: 'Instrutor(a) 2ª Secção'
        },
        //=======================================================
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Edgar Kay',
            position: 'Instrutor(a) 3ª Secção'
        },        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Olinto João',
            position: 'Instrutor(a) 3ª Secção'
        },        {
            picture: '/assets/img/dirigentes/celma.png',
            name: 'Celma Luis',
            position: 'Instrutor(a) 3ª Secção'
        },        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Isabel Bamba',
            position: 'Instrutor(a) 3ª Secção'
        },        {
            picture: '/assets/img/dirigentes/bengo.png',
            name: 'Alicerce Bengo',
            position: 'Instrutor(a) 3ª Secção'
        },        {
            picture: '/assets/img/dirigentes/rosalina.png',
            name: 'Rosalina Pascoal',
            position: 'Instrutor(a) 3ª Secção'
        },        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Orlando Santos',
            position: 'Instrutor(a) 3ª Secção'
        },
        //=======================================================
        {
            picture: '/assets/img/dirigentes/nodua.png',
            name: 'Cardoso Pedro',
            position: 'Instrutor(a) 4ª Secção'
        },
        {
            picture: '/assets/img/dirigentes/josefina.png',
            name: 'Josefina Maria',
            position: 'Instrutor(a) 4ª Secção'
        },        {
            picture: '/assets/img/dirigentes/dani.png',
            name: 'Hermenegildo Augusto',
            position: 'Instrutor(a) 4ª Secção'
        },        {
            picture: '/assets/img/dirigentes/nado.png',
            name: 'Bernardo Roque ',
            position: 'Instrutor(a) 4ª Secção'
        },        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Rosa Guerra',
            position: 'Instrutor(a) 4ª Secção'
        },
        //=======================================================
        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Wilma Beforce',
            position: 'Missão de Serviço'
        },        {
            picture: '/assets/img/dirigentes/default.png',
            name: 'Verres Neto',
            position: 'Missão de Serviço'
        }

    ]

    constructor() { }

    ngOnInit(): void {
    }

}

