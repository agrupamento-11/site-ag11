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
    /*  
    transform( value: number = 0 ): string | null {
        if (Boolean(value)) {
            return `${Number(value.toFixed(2)).toLocaleString()} AOA`

        } else {
            return `${Number(0).toLocaleString()} AOA`
        }
    }*/
}