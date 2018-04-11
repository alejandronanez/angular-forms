import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: "stock-inventory",
  styleUrls: ["stock-inventory.component.scss"],
  template: `
        <div class="stock-inventory">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <div formGroupName="store">
                    <input type="text" placeholder="Branch ID" formControlName="branch">
                    <input type="text" placeholder="Manager code" formControlName="code">
                </div>
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
    })
  })

  onSubmit() {
    console.log("submit:", this.form.value);
  }
}