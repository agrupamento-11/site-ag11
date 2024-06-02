import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SiteRoutingModule,
        SharedModule
    ],
    declarations: [ 
        HomeComponent,
        NavbarComponent
    ],
    providers: [
        
    ]
})
export class SiteModule { }
