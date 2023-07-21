import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './views/layout/not-found-component/not-found-component.component';

const routes: Routes = [
      {
        path: '',
        loadChildren: () => import('./views/site/site.module').then(m => m.SiteModule)
    },
    /*
    {
        path: '', component: HomeComponent,
        data: { title: 'Inicio'},
        children: [

        ]
    },
    */
    {
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full',
        component: NotFoundComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
