import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';



import { FormatCurrencyPipe } from '../pipes/currency.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingComponent } from './components/loading/loading.component';
import { urlPipe } from '../pipes/url.pipe';
import { SafeHtmlPipe } from '../pipes/html_safe.pipe';



@NgModule({
    declarations: [
        FormatCurrencyPipe,
        SafeHtmlPipe,
        urlPipe,
        SpinnerComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule
    ],
    exports: [
        FormatCurrencyPipe,
        SafeHtmlPipe,
        urlPipe,
        SpinnerComponent,
        LoadingComponent,
        NgxPaginationModule,
        SpinnerComponent
    ]
})

export class SharedModule { }
