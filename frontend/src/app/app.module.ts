import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './components/cliente/directives/directives.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/cliente/portfolio/portfolio.component';
import { AboutComponent } from './components/cliente/about/about.component';
import { HeadingComponent } from './components/cliente/heading/heading.component';
import { PricingComponent } from './components/cliente/pricing/pricing.component';
import { BlogComponent } from './components/cliente/blog/blog.component';
import { ContactComponent } from './components/cliente/contact/contact.component';
import { ContactDialogComponent } from './components/cliente/contact-dialog/contact-dialog.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    HeadingComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    ContactDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  entryComponents: [ContactDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
