import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'stock-products',
    styleUrls: ['stock-products.component.scss'],
    template: `
        <div class="stock-products" [formGroup]="parent">
        </div>
    `
})

export class StockProductComponent {
    @Input() parent: FormGroup;
}