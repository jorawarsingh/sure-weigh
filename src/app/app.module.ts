import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ShipperComponent} from './shipper/shipper.component';
import {ShipperService} from './shipper/shipper.service';
import {PageNotFoundComponent} from './404';
import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ShipperComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [ShipperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
