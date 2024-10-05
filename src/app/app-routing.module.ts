import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvmComponent } from './tvm/tvm.component';
import { AboutComponent } from './about/about.component';
import { SoftwareComponent } from './software/software.component';
import { NetworkComponent } from './network/network.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',component:TvmComponent},
  {path:'tvm',component:TvmComponent},
  {path:'home',component:TvmComponent},
  {path:'about',component:AboutComponent},
  {path:'softwareServices',component:SoftwareComponent},
  {path:'networkServices',component:NetworkComponent},
  {path:'enroll',component:EnrollComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
