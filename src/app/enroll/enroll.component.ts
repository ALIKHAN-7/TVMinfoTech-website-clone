import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {
  appForm:FormGroup;
  enrollments:any[]=[]

  constructor(private fb:FormBuilder,private dataservice:DataService){
    this.appForm=this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      collegeName: ['', Validators.required],
      interestedTech: ['', Validators.required],
      comments: [''],
      resumeUpload: [null]
    })

  }
  onSubmit(){
  //   this.dataservice.addData(this.appForm.value).subscribe(response=>{
  //     console.log('form submitted',response)
  //   }
  // )
  this.dataservice.addData(this.appForm.value).subscribe({
    next: (enrollment)=>{
      this.enrollments.push(this.enrollments);
      this.appForm.reset();
    }
  })
  }

}
function enrollment(value: any): void {
  throw new Error('Function not implemented.');
}

