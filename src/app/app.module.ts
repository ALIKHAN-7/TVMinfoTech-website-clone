import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TvmComponent } from './tvm/tvm.component';
import { AboutComponent } from './about/about.component';
import { SoftwareComponent } from './software/software.component';
import { NetworkComponent } from './network/network.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuickLinksComponent,
    FooterComponent,
    HomeComponent,
    TvmComponent,
    AboutComponent,
    SoftwareComponent,
    NetworkComponent,
    EnrollComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
