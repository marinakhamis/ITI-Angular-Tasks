import { AbstractControl } from "@angular/forms";
export function cPasswordValidator(control:AbstractControl){
    const password= control.get("password");
    const  cPassword= control.get('cPassword')
    if (password?.pristine || cPassword?.pristine )
    return null;
    return password && cPassword && password.value != cPassword.value ?{'misMatch':true}:null;

}