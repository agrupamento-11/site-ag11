import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SiteRoutingModule
    ],
    declarations: [ 
        HomeComponent
    ],
    providers: [
        
    ]
})
export class SiteModule { }
