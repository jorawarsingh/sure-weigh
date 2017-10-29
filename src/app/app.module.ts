import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './404';
import {AppRoutingModule} from './app.routing';
import {AuthModule} from './auth/auth.module';
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
        AuthModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
