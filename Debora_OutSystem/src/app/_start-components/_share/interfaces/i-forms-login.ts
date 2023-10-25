import { FormControl, FormGroup } from "@angular/forms";



export interface IFormLogin extends FormGroup<{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}> {}
