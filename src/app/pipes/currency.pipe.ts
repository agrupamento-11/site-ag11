import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'to_kwanza',
})

export class FormatCurrencyPipe implements PipeTransform {  
    transform(value: number = 0 ) {
        const currency = new Intl.NumberFormat('pt-AO', {
            style: 'currency',
            currency: 'AOA'
        })

        return currency.format(value)
        
    }
}