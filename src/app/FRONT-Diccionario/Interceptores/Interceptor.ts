import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
@Injectable()
export class MyInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //console.log("Esto es el interceptor");

        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {

                if(err.status === 200){
                    location.reload();
                    return throwError(err);
                }

                else{
                    alert("Ha ocurrido un error grave.\n\nSerá redirigido a la página de inicio.");

                    this.router.navigateByUrl('/');

                    return throwError(err);

                }

                
            })
        );
    }
}