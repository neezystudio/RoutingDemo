import { Component, OnInit } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-forms',
  templateUrl: './profile-forms.component.html',
  styleUrls: ['./profile-forms.component.scss'],
  imports:[IonicModule],
})
export class ProfileFormsComponent  {
  profileform!: FormGroup;
  ngOnInit(){
    this.profileform = new FormGroup({
      'name': new FormControl(null, Validators.required),
    })
  }

}
