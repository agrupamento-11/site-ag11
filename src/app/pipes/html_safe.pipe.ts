import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'html_safe',
})

export class SafeHtmlPipe implements PipeTransform {  
    constructor(
        private sanitizer: DomSanitizer
    ) { }

    transform(value: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}