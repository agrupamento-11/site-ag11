import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports-routing';
import { OrdersByUsersComponent } from './orders-by-users/orders-by-users.component';




const ngWizardConfig: NgWizardConfig = {
    theme: THEME.default
}

@NgModule({
    declarations: [
        ReportsComponent,
        OrdersByUsersComponent
    ],

    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ReportsRoutingModule,
        TranslateModule.forChild(),
        SharedModule,
        NgWizardModule.forRoot(ngWizardConfig),
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.circleSwish,
            backdropBackgroundColour: "rgba(0,0,0,0.1)",
            backdropBorderRadius: "4px",
            primaryColour: "#ffffff",
            secondaryColour: "#ffffff",
            tertiaryColour: "#ffffff",
        })
    ]
})

export class ReportsModule { }
