import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: "stock-inventory",
  styleUrls: ["stock-inventory.component.scss"],
  template: `
        <div class="stock-inventory">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">

                <stock-branch [parent]="form"></stock-branch>
                <stock-products [parent]="form"></stock-products>
                <stock-selector [parent]="form"></stock-selector>

                
                <div class="stock-inventory__buttons">
                    <button
                        type="submit"
                        [disabled]="form.invalid"
                        >
                        Order Stock
                    </button>
                    <pre>{{ form.value | json}}</pre>
                </div>
            </form>
        </div>
    `
})
export class StockInventoryComponent {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl("abc"),
      code: new FormControl("123")
    }),
    selector: new FormGroup({
        product_id: new FormControl(''),
        quantity: new FormControl(10)
    }),
    stock: new FormArray([])

  })

  onSubmit() {
    console.log("submit:", this.form.value);
  }
}