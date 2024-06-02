import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CostsComponent } from './costs/costs.component';
import { PendingOrdersComponent } from './orders/pending-orders/pending-orders.component';
import { ConfirmedOrdersComponent } from './orders/confirmed-orders/confirmed-orders.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'products',
                component: ProductsComponent,
            },
            {
                path: 'orders',
                component: OrdersComponent,
            },
            {
                path: 'orders/confirmed',
                component: ConfirmedOrdersComponent,
            },
            {
                path: 'orders/pending',
                component: PendingOrdersComponent,
            },
            {
                path: 'costs',
                component: CostsComponent,
            },
            {
                path: 'customers',
                component: CustomersComponent,
            },
        ],
    }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class ManagersRoutingModule {}
