import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DoctorID, DoctorProfileClass, AddressClass, doctorID, Address} from '../../../interfaces/doctor';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
  private username : string = "Vinit Mahajan";
  
  private doctorid : DoctorID;

  qualificationsList : string [] = ['Doctor of Medicine by research (MD(Res), DM)',
'Doctor of Philosophy (PhD, DPhil)', 'Master of Clinical Medicine (MCM)',
'Master of Medical Science (MMSc, MMedSc)', 'Master of Medicine (MM, MMed)',
'Master of Philosophy (MPhil)', 'Master of Surgery (MS, MSurg, MChir, MCh, ChM, CM)',
'Master of Science in Medicine or Surgery (MSc)', 'Doctor of Clinical Medicine (DCM)',
'Doctor of Clinical Surgery (DClinSurg)', 'Doctor of Medical Science (DMSc, DMedSc)', 
'Doctor of Surgery (DS, DSurg)'];

  

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    EmailAddress: new FormControl(''),
    Qualifications : new FormControl(),
    Dob: new FormControl(''),
    address: new FormGroup({
      number: new FormControl(),
      street: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      PinCode: new FormControl('')
    })
  });

  constructor() { 
  }
  
  ngOnInit() {
    this.profileForm.patchValue({firstName:"Wayne", lastName : "Mahajan",
   Qualifications: ['Doctor of Medicine by research (MD(Res), DM)',
   'Doctor of Philosophy (PhD, DPhil)', 'Master of Clinical Medicine (MCM)']});
    console.log(this.profileForm.value['Qualifications']) ;
  }
  ontoggle(drawer){
    drawer.toggle();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}