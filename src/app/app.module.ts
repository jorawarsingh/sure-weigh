import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './404';
import {AppRoutingModule} from './app.routing';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import {TimingInterceptor} from './http/http-interceptor';

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
    bootstrap: [AppComponent],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TimingInterceptor,
        multi: true,
    }]
})
export class AppModule {
}
