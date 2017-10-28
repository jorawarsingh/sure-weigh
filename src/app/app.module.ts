import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './404';
import {AppRoutingModule} from './app.routing';
import {AdminModule} from './admin/admin.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        AppRoutingModule,
        RouterModule,
        BrowserModule,
        HttpClientModule,
        AdminModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
