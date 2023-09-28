import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaleConnoscoComponentComponent } from './fale-connosco/fale-connosco-component/fale-connosco-component.component';


const routes: Routes = [
	{
		path: '',
		component: FaleConnoscoComponentComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SiteRoutingModule {}
