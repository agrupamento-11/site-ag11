import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ManagersRoutingModule } from './managers-routing';

import { ManagersComponent } from './managers.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { CreateOrEditProductComponent } from './products/create-or-edit-product/create-or-edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CostsComponent } from './costs/costs.component';
import { CreateCostComponent } from './costs/create-cost/create-cost.component';
import { PendingOrdersComponent } from './orders/pending-orders/pending-orders.component';
import { ConfirmedOrdersComponent } from './orders/confirmed-orders/confirmed-orders.component';
import { ScheduleComponent } from './orders/pending-orders/schedule/schedule.component';




const ngWizardConfig: NgWizardConfig = {
    theme: THEME.default
}

@NgModule({
    declarations: [
        ManagersComponent,
        ProductsComponent,
        CreateOrEditProductComponent,
        OrdersComponent,
        CustomersComponent,
        CostsComponent,
        CreateCostComponent,
        PendingOrdersComponent,
        ConfirmedOrdersComponent,
        ScheduleComponent

    ],

    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ManagersRoutingModule,
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

export class ManagersModule { }
