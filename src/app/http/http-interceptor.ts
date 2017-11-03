import 'rxjs/add/operator/do';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class TimingInterceptor implements HttpInterceptor {
    // constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        const dupReq = req.clone();

        // Change the URL and replace 'http://' with 'https://'
        const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
        console.log(secureReq);
        return next
            .handle(secureReq)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
            });
    }
}