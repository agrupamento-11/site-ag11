import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SiteRoutingModule,
        
    ],
    exports: [
        FooterComponent,
        NavbarComponent
    ],

    declarations: [ 
        HomeComponent,
        NavbarComponent,
        FooterComponent
    ],
    providers: [
        
    ]
})
export class SiteModule { }
