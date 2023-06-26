import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<unknown>, next: HttpHandler) {
        // Get the auth token from the service.
        const authToken = 'dummy-token';

        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken),
            url: `${environment.apiUrl}/${req.url}`,
        });

        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}
