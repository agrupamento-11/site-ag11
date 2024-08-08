import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrganigramComponent } from './organigram/organigram.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'organigrama',
		component: OrganigramComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SiteRoutingModule {}
