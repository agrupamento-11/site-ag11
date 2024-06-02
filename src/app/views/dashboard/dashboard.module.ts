import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BarComponent } from './charts/bar/bar.component';


@NgModule({
    declarations: [
        DashboardComponent,
        BarComponent
    ],
    imports: [
        FormsModule,
        DashboardRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        CommonModule,
        TranslateModule.forChild()
    ]
})

export class DashboardModule { }
