import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error) {
        // notificationService.error
        window.alert(`Status: ${error.status}; Message: ${error.message}`);
        // sentry.push(error)
        return throwError(error);
    }
}
