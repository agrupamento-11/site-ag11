import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersByUsersComponent } from './orders-by-users/orders-by-users.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'orders-by-users',
                component: OrdersByUsersComponent,
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReportsRoutingModule {}
